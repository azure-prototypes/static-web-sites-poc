import {
	useImperativeHandle,
	useMemo, useState,
} from 'react';

import { useDebounceEffect } from 'hooks';
import { isFunction } from 'utils/object';

const useTable = (props, ref) => {
	const {
		page,
		rowsPerPage,
		tab,
		data,
		orderColumn,
		orderDirection,
		filters,
		columns,
		searchText = '',
	} = props;
	const [pageData, setPageData] = useState([]);
	const [totalCount, setTotalCount] = useState(0);

	const fetchData = async () => {
		if (isFunction(data)) {
			const response = await data({
				page,
				size: rowsPerPage,
				tab,
				searchText,
				orderColumn,
				orderDirection,
				filters,
			});
			setPageData(response.data);
			setTotalCount(response.totalCount);
		}
	};

	useDebounceEffect(async () => {
		await fetchData();
	}, [
		page,
		rowsPerPage,
		tab,
		searchText,
		orderColumn,
		orderDirection,
		filters,
	]);

	useImperativeHandle(ref, () => ({
		async updateTable() {
			await fetchData();
		},
	}));

	const tableColumns = useMemo(
		() => (isFunction(columns) ? columns(tab) : columns),
		[columns, tab],
	);

	return {
		pageData,
		totalCount,
		tableColumns,
	};
};

export default useTable;
