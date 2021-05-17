import { useCallback, useState } from 'react';

import { RuleFieldNames as fieldNames } from '../constants';
import { editRule } from './api/index';

export const useEditRule = (onClose, priceRuleId, onSave) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const onInnerClose = useCallback(() => {
		setErrorMessage('');
		setSuccessMessage('');
		onClose();
	}, [setErrorMessage, setSuccessMessage, onClose]);

	const onCreateRule = useCallback(
		async (fields) => {
			const inputValue = fields[fieldNames.value];
			if (inputValue) {
				const ruleData = {
					value: inputValue,
					priceRuleId,
				};

				const editRuleResponse = await editRule(ruleData);
				if (editRuleResponse.message) {
					setSuccessMessage('');
					setErrorMessage(editRuleResponse.message);
				} else {
					setErrorMessage('');
					setSuccessMessage('Rule edited');
					onSave(inputValue);
				}
			}
		},
		[setErrorMessage, setSuccessMessage, priceRuleId],
	);

	return {
		successMessage,
		errorMessage,
		onInnerClose,
		onCreateRule,
	};
};
