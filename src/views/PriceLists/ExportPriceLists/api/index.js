import { axiosClient } from 'api/axiosClient';

export const exportPriceLists = async ({
	countryId,
}) => {
	try {
		const response = await axiosClient({
			method: 'get',
			url: `v1/price-lists/export/${countryId}`,
		});

		return response;
	} catch (error) {
		return error;
	}
};
