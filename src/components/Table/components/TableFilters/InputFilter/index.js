import React from 'react';

import { Input, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { useInputFilter } from './useInputFilter';

const InputFilter = (props) => {
	const { onChange, placeholder } = props;
	const classes = styles();
	const { onInnerChange } = useInputFilter(onChange);

	return (
		<Paper className={classes.root} elevation={1}>
			<Input
				className={classes.input}
				onChange={onInnerChange}
				disableUnderline
				placeholder={placeholder}
			/>
		</Paper>
	);
};

InputFilter.propTypes = {
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};

export default InputFilter;
