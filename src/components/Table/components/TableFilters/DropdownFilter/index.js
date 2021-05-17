import React from 'react';

import { MenuItem, Paper, Select } from '@material-ui/core';
import PropTypes from 'prop-types';

import { styles, InputStyle } from './styles';
import { useDropdownFilter } from './useDropdownFilter';

const DropdownFilter = (props) => {
	const classes = styles();
	const {
		onChange, label, options, value: defaultValue, disabled,
	} = props;
	const { value, onInnerChange } = useDropdownFilter(onChange, defaultValue);

	return (
		<Paper className={classes.paper}>
			<Select
				input={<InputStyle />}
				value={value}
				onChange={onInnerChange}
				disabled={disabled}>
				<MenuItem value={0} disabled>
					{label}
				</MenuItem>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</Paper>
	);
};

DropdownFilter.propTypes = {
	disabled: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	label: PropTypes.string,
	options: PropTypes.array,
};

export default DropdownFilter;
