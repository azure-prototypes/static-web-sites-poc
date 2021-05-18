import React from 'react';

import PropTypes from 'prop-types';

import RuleForm from '../components/RuleForm';
import { useCreateRule } from './useCreateRule';

const CreateRule = (props) => {
	const { open, onClose } = props;
	const {
		errorMessage,
		successMessage,
		onCreateRule,
		onInnerClose,
	} = useCreateRule(onClose);

	return (
		<RuleForm
			onClose={onInnerClose}
			open={open}
			isCreate
			successMessage={successMessage}
			errorMessage={errorMessage}
			onSubmit={onCreateRule}
		/>
	);
};

CreateRule.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

export default CreateRule;
