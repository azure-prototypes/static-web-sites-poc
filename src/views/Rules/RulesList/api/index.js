import { axiosClient } from 'api/axiosClient';

import { TabValueAll } from '../../constants';

export const getRulesList = async ({
	size,
	page,
	tab = '',
	searchText = '',
	orderColumn = '',
	orderDirection = '',
}) => {
	try {
		const response = await axiosClient({
			method: 'get',
			url: 'v1/price-rules',
			params: {
				page,
				size,
				name: searchText,
				ruleType: tab === TabValueAll ? '' : tab,
				sort: `${orderColumn},${orderDirection.toUpperCase()}`,
			},
		});

		const { page: pageMetadata, data } = response;

		return {
			data,
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
