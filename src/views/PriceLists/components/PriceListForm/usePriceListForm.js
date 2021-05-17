import {
	useCallback, useEffect, useMemo, useState,
} from 'react';

import moment from 'moment';

import {
	PriceListFieldNames as fieldNames,
	PriceListTypes,
} from '../../constants';
import { getPriceLists } from '../../PriceLists/api';
import { typeOptions, countryOptions } from './constants';

export const usePriceListForm = (props) => {
	const {
		fieldsData, onSubmit, onClose, isCreate, open,
	} = props;
	const fieldsInitialState = {
		startDate: null,
		endDate: null,
		country: countryOptions[0].value,
	};

	const [showErrors, setShowErrors] = useState(false);
	const [fields, setFields] = useState(fieldsInitialState);

	const [basePriceLists, setBasePriceLists] = useState([]);

	const hideBasePriceList = useMemo(
		() => fields[fieldNames.type] === PriceListTypes.OFP,
		[fields, PriceListTypes],
	);

	const isFormValid = useMemo(
		() => Object.values(fields).every((value) => !!value),
		[fields],
	);

	useEffect(() => {
		if (fieldsData) {
			setFields(fieldsData);
		}
	}, [setFields, fieldsData]);

	useEffect(async () => {
		if (!hideBasePriceList && open) {
			const { data } = await getPriceLists({
				tab: PriceListTypes.OFP,
				page: 1,
				size: 50,
				countryId: fields[fieldNames.country],
			});
			setBasePriceLists(
				data.map((priceList) => ({
					value: priceList.priceListId,
					label: priceList.name,
				})),
			);
		}
	}, [fields[fieldNames.country], hideBasePriceList, open]);

	const onFieldChange = useCallback(
		(name) => (e) => {
			if (e === null) {
				return;
			}
			const value = moment.isMoment(e)
				? moment.utc(e).format()
				: e.target.value;
			const newFields = { ...fields, [name]: value };
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
		setFields(isCreate ? fieldsInitialState : fieldsData);
		setBasePriceLists([]);
	}, [
		fieldsInitialState,
		setShowErrors,
		setFields,
		setBasePriceLists,
		isCreate,
		fieldsData,
	]);

	const onInnerClose = useCallback(() => {
		onClose();
		resetForm();
	}, [onClose, resetForm, isCreate]);

	return {
		fields,
		hasError,
		basePriceListsOptions: basePriceLists,
		onFieldChange,
		typeOptions,
		countryOptions,
		hideBasePriceList,
		onInnerSubmit,
		onInnerClose,
	};
};
