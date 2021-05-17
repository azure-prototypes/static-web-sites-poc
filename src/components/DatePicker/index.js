import React from 'react';

import { CalendarToday } from '@material-ui/icons';
import { KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';

import TextInput from '../TextInput';

const Picker = (props) => {
	const { label, ...rest } = props;

	return (
		<KeyboardDatePicker
			label={label}
			{...rest}
			autoFocus={false}
			TextFieldComponent={TextInput}
			format="MM-DD-yyyy"
			mask="__-__-____ "
			keyboardIcon={<CalendarToday />}
		/>
	);
};

Picker.propTypes = {
	label: PropTypes.string,
};

export default Picker;
