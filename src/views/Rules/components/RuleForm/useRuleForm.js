import {
	useCallback, useEffect, useMemo, useState,
} from 'react';

import { mapDropdownValues } from 'utils/ui';

import { RuleTypes, HierarchyLevels } from '../../constants';
import { TierRequiredFields } from './constants';

export const useRuleForm = (props) => {
	const {
		fieldsData, onSubmit, onClose, isCreate,
	} = props;
	const [showErrors, setShowErrors] = useState(false);
	const [fields, setFields] = useState({});

	const isFormValid = useMemo(
		() => TierRequiredFields(isCreate).every((field) => !!fields[field]),
		[isCreate, fields],
	);

	useEffect(() => {
		if (fieldsData) {
			setFields(fieldsData);
		}
	}, [setFields, fieldsData]);

	const onFieldChange = useCallback(
		(name) => (e) => {
			const newFields = { ...fields, [name]: e.target.value };
			setFields(newFields);
		},
		[fields, setFields],
	);

	const hasError = useCallback((name) => showErrors && !fields[name], [
		showErrors,
		fields,
	]);

	const onInnerSubmit = useCallback(() => {
		setShowErrors(true);
		if (isFormValid) {
			onSubmit(fields);
		}
	}, [isFormValid, onSubmit, fields, setShowErrors]);

	const resetForm = useCallback(() => {
		setShowErrors(false);
		setFields(isCreate ? {} : fieldsData);
	}, [setShowErrors, setFields, isCreate, fieldsData]);

	const onInnerClose = useCallback(() => {
		onClose();
		resetForm();
	}, [onClose, resetForm, isCreate]);

	return {
		fields,
		hasError,
		onFieldChange,
		onInnerSubmit,
		onInnerClose,
		ruleTypeOptions: mapDropdownValues(RuleTypes),
		hierarchyLevelsOptions: mapDropdownValues(HierarchyLevels),
	};
};
