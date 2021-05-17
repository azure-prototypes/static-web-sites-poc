import React from 'react';

import { Box, LinearProgress, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { v4 as uuidv4 } from 'uuid';

import { appConfig } from 'constants/config';

import { uploadPriceList } from '../../api';
import { IMPORT_FILE_STATUS, messageVisibilityTime, successProgressBarVisibilityTime } from './constants';

class ImportProgress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	loadFile = async (file, externalId) => {
		const data = new FormData();
		data.append('file', file, file.name);
		data.append('externalId', externalId);

		const response = await uploadPriceList({ file: data });
		if (response.message) {
			this.setState({
				showProgressBar: false,
				showMessage: true,
				message: response.message,
			});
			setTimeout(() => {
				this.setState({ message: '', showMessage: false });
			}, messageVisibilityTime);
		}
	};

	connect = (file) => {
		const externalId = uuidv4();
		const socket = new SockJS(`${appConfig.apiUrl}/pricing/web-sockets`);
		socket.withCredentials = false;
		const stompClient = Stomp.over(socket);

		stompClient.connect({}, async () => {
			this.setState({ showProgressBar: true, progressValue: 0 });

			stompClient.subscribe(`/job/${externalId}/messages`, (messageOutput) => {
				const { status, linesProcessed, linesTotal } = JSON.parse(messageOutput.body);
				const isSuccess = status === IMPORT_FILE_STATUS.COMPLETED;

				if (isSuccess || status === IMPORT_FILE_STATUS.FAILED) {
					if (isSuccess) {
						this.setState({ progressValue: 100 });
					}
					setTimeout(() => {
						this.setState({
							showMessage: true,
							showProgressBar: false,
							success: isSuccess,
							message: isSuccess ? 'File imported successfully' : 'File import failed',
						});
					}, successProgressBarVisibilityTime);

					setTimeout(() => {
						this.props.onSuccess();
						this.setState({ showMessage: false });
					}, messageVisibilityTime);
					return;
				}

				const progressValue = Math.round(linesProcessed / (linesTotal / 100));

				this.setState({ showProgressBar: true, progressValue });
			});

			await this.loadFile(file, externalId);
		});
	}

	componentDidMount() {
		this.connect(this.props.file);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.file !== this.props.file) {
			this.connect(this.props.file);
		}
	}

	render() {
		const {
			showProgressBar, progressValue, showMessage, success,
			message,
		} = this.state;
		return (
			<Box mt={3} mb={6}>
				 {showMessage && (
					<Box>
						<Alert severity={success ? 'success' : 'error' }>{ message }</Alert>
					</Box>)}
				{ showProgressBar
					&& <Box>
						<LinearProgress variant="determinate" value={progressValue} />
						<Box mt={1}>
							<Typography variant='caption'>{progressValue}% of file import complete</Typography>
						</Box>
					</Box> }
			</Box>
		);
	}
}

ImportProgress.propTypes = {
	file: PropTypes.object,
	onSuccess: PropTypes.func,
};
export default ImportProgress;
