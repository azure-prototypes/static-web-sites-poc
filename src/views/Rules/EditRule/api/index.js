import { axiosClient } from 'api/axiosClient';

export const editRule = async ({ priceRuleId, value }) => {
	try {
		const response = await axiosClient({
			method: 'put',
			url: `v1/price-rules/${priceRuleId}`,
			data: {
				ruleValue: value,
			},
		});

		return response;
	} catch (error) {
		return error;
	}
};
