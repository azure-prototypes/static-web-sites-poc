import { useCallback, useState } from 'react';

import download from 'downloadjs';

import { COUNTRY_CODES } from 'constants/countries';
import { useOpen } from 'hooks';

import { exportPriceLists } from './api';
import { countryOptions } from './constants';

export const useExportPriceLists = () => {
	const countryDefault = countryOptions[0].value;
	const [isOpen, onOpen, onClose] = useOpen();
	const [country, setCountry] = useState(countryDefault);

	const [{ message, isSuccess }, setMessage] = useState({});

	const onInnerClose = useCallback(() => {
		setCountry(countryDefault);
		setMessage({});
		onClose();
	}, []);

	const onSubmit = useCallback(async () => {
		const response = await exportPriceLists({ countryId: country });
		if (response.message) {
			setMessage({ message: response.message, isSuccess: false });
			return;
		}
		setMessage({});
		download(response, `TIER_${COUNTRY_CODES[country]}.csv`, 'text/csv');
	}, [country]);

	const onCountryChange = useCallback((e) => {
		setCountry(e.target.value);
	}, []);

	return {
		message,
		isSuccess,
		country,
		onCountryChange,
		onInnerClose,
		onSubmit,
		isOpen,
		onOpen,
	};
};
