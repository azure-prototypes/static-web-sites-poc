import { useEffect, useState } from 'react';

import { getPriceLists } from '../../../PriceLists/PriceLists/api';
import { RuleFieldNames as fieldNames } from '../../constants';

export const useTierInputs = (onFieldChange, fields) => {
	const [priceLists, setPriceLists] = useState([]);

	useEffect(async () => {
		const { data } = await getPriceLists({
			tab: 'TIER',
			page: 1,
			size: 50,
		});
		setPriceLists(
			data.map((priceList) => ({
				value: priceList.priceListId,
				label: priceList.name,
				country: priceList.countryId,
			})),
		);
	}, [setPriceLists]);

	useEffect(() => {
		const priceListId = fields[fieldNames.priceList];
		if (priceListId) {
			const selectedPriceList = priceLists.find(
				(priceList) => priceList.value === priceListId,
			);
			if (fields[fieldNames.country] !== selectedPriceList.country) {
				onFieldChange(fieldNames.country)({
					target: { value: selectedPriceList.country },
				});
			}
		}
	}, [fields[fieldNames.priceList], priceLists, onFieldChange]);

	return {
		priceLists,
	};
};
