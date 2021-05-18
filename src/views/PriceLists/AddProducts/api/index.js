import { axiosClient } from 'api/axiosClient';
import { COUNTRIES } from 'constants/countries';

import { productColumnNames } from '../constants';

export const getProducts = async (
	{
		page,
		size,
		filters = [],
		searchText,
		orderColumn = '',
		orderDirection = '',
	},
	countryId,
) => {
	try {
		const response = await axiosClient({
			method: 'get',
			url: 'v1/products',
			params: {
				page,
				size,
				name: filters[productColumnNames.name] || searchText,
				brandName: filters[productColumnNames.brand],
				vikingSku: filters[productColumnNames.vikingSku],
				vendorName: filters[productColumnNames.vendor],
				vendorSku: filters[productColumnNames.vendorSku],
				categoryName: filters[productColumnNames.category],
				costPrice: filters[productColumnNames.costPrice],
				countryId,
				sort: `${orderColumn},${orderDirection.toUpperCase()}`,
			},
		});

		const { page: pageMetadata, data } = response;

		return {
			data: data.map((product) => {
				product.vendorId = product.vendor.name;
				product.category = product.category.name;
				product.brandId = product.brand.name;
				product.country = COUNTRIES[product.countryId];
				return product;
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

export const addProducts = async ({ priceListId, productIds }) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: 'v1/price-lists/add-products',
			data: {
				priceListId,
				productIds,
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
};
