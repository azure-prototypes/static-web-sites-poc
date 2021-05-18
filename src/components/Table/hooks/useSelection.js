import {
	useState, useCallback, useMemo, useEffect,
} from 'react';

const useSelection = (pageData, onSelection, page, tab) => {
	const [selectedRows, setSelectedRows] = useState([]);

	const onSelectRow = useCallback(
		(event, selectedIndex) => {
			const { value } = event.target;
			if (value === 'false') {
				setSelectedRows([...selectedRows, selectedIndex]);
			} else {
				setSelectedRows(selectedRows.filter((index) => index !== selectedIndex));
			}
		},
		[selectedRows],
	);

	const onSelectAllRows = useCallback(
		(event) => {
			setSelectedRows(
				event.target.checked ? pageData.map((item, index) => index) : [],
			);
		},
		[setSelectedRows, pageData],
	);

	const isIndeterminate = useMemo(
		() => selectedRows.length > 0 && selectedRows.length < pageData.length,
		[selectedRows.length, pageData.length],
	);

	const isAllSelected = useMemo(
		() => pageData.length && selectedRows.length >= pageData.length,
		[selectedRows.length, pageData.length],
	);

	useEffect(() => {
		onSelection(pageData.filter((row, index) => selectedRows.includes(index)));
	}, [selectedRows.length, onSelection]);

	useEffect(() => {
		setSelectedRows([]);
	}, [page, setSelectedRows, tab]);

	return {
		selectedRows,
		isIndeterminate,
		isAllSelected,
		onSelectRow,
		onSelectAllRows,
	};
};

export default useSelection;
