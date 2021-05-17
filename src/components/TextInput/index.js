import React from 'react';

import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { outlinedStyles } from 'styles';

const TextInput = (props) => {
	const {
		placeholder, onChange, value = '', label, ...rest
	} = props;

	return (
		<TextField
			{...rest}
			label={label}
			variant="outlined"
			onChange={onChange}
			value={value}
		/>
	);
};

TextInput.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};

export default withStyles(outlinedStyles)(TextInput);
