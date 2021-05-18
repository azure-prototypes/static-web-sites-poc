import React, { useEffect } from 'react';

import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

const AlertComponent = (props) => {
	const {
		open,
		severity,
		message,
		onClose,
		autoHideDuration,
	} = props;

	useEffect(() => {
		if (open && autoHideDuration) {
			setTimeout(() => {
				onClose();
			}, autoHideDuration);
		}
	}, [open, autoHideDuration, onClose]);

	return open && (
		<Alert severity={severity} onClose={onClose}>{ message }</Alert>
	);
};

AlertComponent.propTypes = {
	open: PropTypes.bool,
	message: PropTypes.string,
	onClose: PropTypes.func,
	severity: PropTypes.oneOf(['success', 'error']),
	autoHideDuration: PropTypes.number,
};

AlertComponent.defaultProps = {
	severity: 'success',
};

export default AlertComponent;
