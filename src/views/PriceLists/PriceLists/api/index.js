import { axiosClient } from 'api/axiosClient';
import { COUNTRIES } from 'constants/countries';

import { TabValueAll } from '../constants';

export const getPriceLists = async ({
	size,
	page,
	tab = '',
	searchText = '',
	orderColumn = '',
	orderDirection = '',
	countryId = '',
}) => {
	try {
		const response = await axiosClient({
			method: 'get',
			url: 'v1/price-lists',
			params: {
				countryId,
				page,
				size,
				name: searchText,
				type: tab === TabValueAll ? '' : tab,
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

export const uploadPriceList = async ({
	file,
}) => {
	try {
		const response = await axiosClient({
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			method: 'post',
			url: 'v1/price-lists/products/upload',
			data: file,
		});

		return response;
	} catch (error) {
		return error;
	}
};

export const publishPriceLists = async ({
	priceListIds,
	countryId,
}) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: 'v1/price-lists/publish/fcp',
			data: {
				priceListIds,
				countryId,
			},
		});

		return response;
	} catch (error) {
		return error;
	}
};
