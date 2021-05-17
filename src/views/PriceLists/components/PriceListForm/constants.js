import { COUNTRY_CODES } from 'constants/countries';
import { mapDropdownValues } from 'utils/ui';

import { PriceListTypes } from '../../constants';

export const typeOptions = Object.keys(PriceListTypes)
	.filter((type) => type !== PriceListTypes.FCP)
	.map((type) => ({
		value: type,
		label: type,
	}));

export const countryOptions = mapDropdownValues(COUNTRY_CODES);
