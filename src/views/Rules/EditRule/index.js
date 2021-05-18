import React from 'react';

import PropTypes from 'prop-types';

import RuleForm from '../components/RuleForm';
import { useEditRule } from './useEditRule';

const EditRule = (props) => {
	const {
		open, fieldsData, onClose, onSave,
	} = props;
	const {
		errorMessage,
		successMessage,
		onCreateRule,
		onInnerClose,
	} = useEditRule(onClose, fieldsData.priceRuleId, onSave);

	return (
		<RuleForm
			onClose={onInnerClose}
			open={open}
			isCreate={false}
			successMessage={successMessage}
			errorMessage={errorMessage}
			onSubmit={onCreateRule}
			fieldsData={fieldsData}
		/>
	);
};

EditRule.propTypes = {
	priceRuleId: PropTypes.number,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	onSave: PropTypes.func,
	fieldsData: PropTypes.object,
};

export default EditRule;
