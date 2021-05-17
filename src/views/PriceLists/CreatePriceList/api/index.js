import { axiosClient } from 'api/axiosClient';

export const addPriceList = async ({
	effortCode,
	basePriceListId,
	name,
	countryIso,
	type,
}) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: 'v1/price-lists',
			data: {
				effortCode,
				basePriceListId,
				name,
				country: countryIso,
				type,
				active: true,
			},
		});

		return response;
	} catch (error) {
		return error;
	}
};

export const addPeriod = async ({ name, validFrom, validTo }) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: 'v1/periods',
			data: {
				name,
				validFrom,
				validTo,
			},
		});
		return response;
	} catch (error) {
		return error;
	}
};

export const addPeriodToPriceList = async ({ priceListId, periodId }) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: 'v1/price-lists/add-period',
			data: {
				priceListId,
				periodId,
			},
		});
		return response;
	} catch (error) {
		return error;
	}
};
