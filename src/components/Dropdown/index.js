import React from 'react';

import {
	FormControl,
	InputLabel,
	MenuItem,
	withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { outlinedStyles } from 'styles';

import { StyledSelect, StyledMenuItem } from './styles';

const Dropdown = (props) => {
	const {
		label, options, onChange, value = '', helpText, ...rest
	} = props;

	return (
		<FormControl variant="outlined" {...rest}>
			<InputLabel htmlFor="select">{label}</InputLabel>
			<StyledSelect
				label={label}
				inputProps={{
					id: 'select',
				}}
				value={value}
				onChange={onChange}
				{...rest}>
				{ !!helpText && options.length === 0
				&& <StyledMenuItem disabled>
					{ helpText }
				</StyledMenuItem>}
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};

Dropdown.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	),
	onChange: PropTypes.func,
};

export default withStyles(outlinedStyles)(Dropdown);
