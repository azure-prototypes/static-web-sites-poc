import { useCallback, useState } from 'react';

import { ORDER_DIRECTION } from 'constants/table';

const useSorting = (props) => {
	const [orderColumn, setOrderColumn] = useState(props.column);
	const [orderDirection, setOrderDirection] = useState(props.direction);

	const onSort = useCallback(
		(column) => {
			if (column === orderColumn) {
				setOrderDirection(
					orderDirection === ORDER_DIRECTION.asc
						? ORDER_DIRECTION.desc
						: ORDER_DIRECTION.asc,
				);
			} else {
				setOrderColumn(column);
			}
		},
		[setOrderColumn, setOrderDirection, orderColumn, orderDirection],
	);

	return {
		orderDirection,
		orderColumn,
		onSort,
	};
};

export default useSorting;
