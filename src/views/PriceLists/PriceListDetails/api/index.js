import { axiosClient } from 'api/axiosClient';
import { COUNTRIES } from 'constants/countries';

export const getPriceListRows = async ({
	size,
	page,
	searchText = '',
	priceListId,
	filters = {},
	orderColumn,
	orderDirection,
}) => {
	try {
		const response = await axiosClient({
			method: 'get',
			url: 'v1/price-list-rows',

			params: {
				page,
				size,
				productName: filters.productName || searchText,
				priceListId,
				vikingSku: filters.vikingSku,
				brandName: filters.brandName,
				vendorName: filters.vendorName,
				vendorSku: filters.vendorSku,
				categoryName: filters.categoryName,
				costPrice: filters.costPrice,
				sellingPrice: filters.sellingPrice,
				sort: `${orderColumn},${orderDirection.toUpperCase()}`,
			},
		});

		const { page: pageMetadata, data } = response;

		return {
			data: data.map((priceList) => {
				priceList.country = COUNTRIES[priceList.countryId];
				return priceList;
			}),
			page,
			totalCount: pageMetadata.totalRecords,
		};
	} catch (error) {
		return {
			data: [],
			totalCount: 0,
		};
	}
};

export const getPriceListDetails = async ({ priceListId }) => {
	try {
		const response = await axiosClient({
			method: 'get',
			url: `v1/price-lists/${priceListId}`,
		});

		response.country = response.country.countryId.toString();

		if (response.periods && response.periods.length > 0) {
			const [period] = response.periods;
			response.startDate = period.validFrom;
			response.endDate = period.validTo;
		}

		return response;
	} catch (error) {
		return error;
	}
};

export const reCalculate = async ({ priceListId }) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: `v1/price-list/${priceListId}/calculate`,
		});
		return response;
	} catch (error) {
		return error;
	}
};
