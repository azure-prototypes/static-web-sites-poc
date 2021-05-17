import { axiosClient } from 'api/axiosClient';

export const addRule = async ({
	name,
	ruleType,
	hierarchyLevel,
	priceList,
	country,
	value,
}) => {
	try {
		const response = await axiosClient({
			method: 'post',
			url: 'v1/price-rules',
			data: {
				name,
				ruleType,
				hierarchyLevel,
				ruleValue: value,
				priceListId: priceList,
				countryId: country,
				active: true,
			},
		});

		return response;
	} catch (error) {
		return error;
	}
};
