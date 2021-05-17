import { useCallback, useEffect, useState } from 'react';

const initialPage = 1;

export const usePagination = (rowsPerPageInitial, tab, searchText, filters) => {
	const [page, setPage] = useState(initialPage);
	const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageInitial);

	const onChangePage = useCallback(
		(event, pageNumber) => {
			setPage(pageNumber + 1);
		},
		[setPage],
	);

	const onChangeRowsPerPage = useCallback(
		(event) => {
			setRowsPerPage(event.target.value);
		},
		[setRowsPerPage],
	);

	useEffect(() => {
		setPage(initialPage);
	}, [tab, searchText, filters]);

	return {
		page,
		rowsPerPage,
		onChangePage,
		onChangeRowsPerPage,
	};
};

export default usePagination;
