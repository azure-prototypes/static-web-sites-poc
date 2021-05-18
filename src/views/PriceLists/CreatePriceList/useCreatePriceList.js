import { useCallback, useState } from 'react';

import { COUNTRY_CODES } from 'constants/countries';

import { PriceListFieldNames as fieldNames } from '../constants';
import { addPriceList, addPeriod, addPeriodToPriceList } from './api';

export const useCreatePriceList = (onClose) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const isResponseOk = useCallback(
		(response) => {
			if (response.message) {
				setErrorMessage(response.message);
				return false;
			}
			setErrorMessage('');
			return true;
		},
		[setErrorMessage],
	);

	const onCreatePriceList = useCallback(
		async (fields) => {
			const priceListData = {
				name: fields[fieldNames.name],
				type: fields[fieldNames.type],
				countryIso: COUNTRY_CODES[fields[fieldNames.country]],
				effortCode: fields[fieldNames.effortCode],
				basePriceListId: fields[fieldNames.basePriceListId],
			};

			const addPLResponse = await addPriceList(priceListData);

			if (isResponseOk(addPLResponse)) {
				const addPeriodResponse = await addPeriod({
					name: fields[fieldNames.name],
					validFrom: fields[fieldNames.startDate],
					validTo: fields[fieldNames.endDate],
				});

				if (isResponseOk(addPeriodResponse)) {
					const addPeriodToPLResponse = await addPeriodToPriceList({
						priceListId: addPLResponse.priceListId,
						periodId: addPeriodResponse.periodId,
					});

					if (isResponseOk(addPeriodToPLResponse)) {
						setSuccessMessage('Price list created');
					}
				}
			}
		},
		[
			addPriceList,
			addPeriod,
			addPeriodToPriceList,
			isResponseOk,
			setSuccessMessage,
		],
	);

	const onInnerClose = useCallback(() => {
		setErrorMessage('');
		setSuccessMessage('');
		onClose();
	}, [setErrorMessage, setSuccessMessage, onClose]);

	return {
		successMessage,
		errorMessage,
		onInnerClose,
		onCreatePriceList,
	};
};
