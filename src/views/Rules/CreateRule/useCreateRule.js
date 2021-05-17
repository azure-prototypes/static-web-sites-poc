import { useCallback, useState } from 'react';

import { RuleFieldNames as fieldNames } from '../constants';
import { addRule } from './api/index';

export const useCreateRule = (onClose) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const onInnerClose = useCallback(() => {
		setErrorMessage('');
		setSuccessMessage('');
		onClose();
	}, [setErrorMessage, setSuccessMessage, onClose]);

	const onCreateRule = useCallback(
		async (fields) => {
			const ruleData = {
				name: fields[fieldNames.name],
				ruleType: fields[fieldNames.ruleType],
				hierarchyLevel: fields[fieldNames.hierarchyLevel],
				priceList: fields[fieldNames.priceList],
				country: fields[fieldNames.country],
				value: fields[fieldNames.value],
			};

			const addRuleResponse = await addRule(ruleData);
			if (addRuleResponse.message) {
				setSuccessMessage('');
				setErrorMessage(addRuleResponse.message);
			} else {
				setErrorMessage('');
				setSuccessMessage('Rule created');
			}
		},
		[setErrorMessage, setSuccessMessage],
	);

	return {
		successMessage,
		errorMessage,
		onInnerClose,
		onCreateRule,
	};
};
