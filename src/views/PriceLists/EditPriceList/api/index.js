import { axiosClient } from 'api/axiosClient';

export const updatePriceListName = async ({ priceListId, name }) => {
	try {
		const response = await axiosClient({
			method: 'put',
			url: `v1/price-lists/${priceListId}`,
			data: {
				name,
			},
		});
		return response;
	} catch (error) {
		return error;
	}
};
