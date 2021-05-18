import React from 'react';

import { Button } from '@material-ui/core';
import { Publish } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { useFileUpload } from './useFileUpload';

const UploadButton = (props) => {
	const { title, onChange, fileFormats = '.xlsx' } = props;
	const { onFileChange } = useFileUpload(onChange);

	return <Button
		variant="contained"
		component="label"
	>
		<Publish />
		{ title }
		<input
			type="file"
			hidden
			onChange={onFileChange}
			accept={fileFormats}
		/>
	</Button>;
};

UploadButton.propTypes = {
	onChange: PropTypes.func,
	title: PropTypes.string,
	fileFormats: PropTypes.string,
};
export default UploadButton;
