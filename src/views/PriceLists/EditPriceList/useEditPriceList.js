import { useCallback, useState } from 'react';

import { PriceListFieldNames as fieldNames } from '../constants';
import { updatePriceListName } from './api';

export const useEditPriceList = (props) => {
	const { onClose, onSubmit } = props;
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const onInnerClose = useCallback(() => {
		setErrorMessage('');
		setSuccessMessage('');
		onClose();
	}, [setErrorMessage, setSuccessMessage, onClose]);

	const onEditPriceList = useCallback(
		async (fields) => {
			const updateResponse = await updatePriceListName({
				priceListId: fields.priceListId,
				name: fields[fieldNames.name],
			});

			if (updateResponse.message) {
				setErrorMessage(updateResponse.message);
			} else {
				setSuccessMessage('Price list updated');
				onSubmit(fields);
			}
		},
		[onSubmit, setErrorMessage, setSuccessMessage],
	);

	return {
		successMessage,
		errorMessage,
		onInnerClose,
		onEditPriceList,
	};
};
