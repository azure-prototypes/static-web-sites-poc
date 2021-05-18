import React, { useCallback } from 'react';

import { TableSortLabel } from '@material-ui/core';

import { DropdownFilter, InputFilter } from '../TableFilters';

export const useTableHeader = (
	onSort,
	onFiltersChange,
	orderDirection,
	orderColumn,
) => {
	const onInnerSort = useCallback(
		(column) => () => {
			onSort(column);
		},
		[onSort],
	);

	const onInnerFiltersChange = useCallback(
		(column) => (value) => {
			onFiltersChange(column, value);
		},
		[onFiltersChange],
	);

	const renderColumnContent = useCallback(
		(column) => {
			if (column.sorting) {
				const sortingColumn = column.sortingColumn || column.field;
				return (
					<TableSortLabel
						active={orderColumn === sortingColumn}
						direction={orderDirection}
						onClick={onInnerSort(sortingColumn)}>
						{column.title}
					</TableSortLabel>
				);
			}
			return column.title;
		},
		[orderColumn, orderDirection],
	);

	const renderFilters = (column) => {
		if (column.filtering) {
			return column.filterOptions ? (
				<DropdownFilter
					onChange={onInnerFiltersChange(column.field)}
					label={column.title}
					value={column.filterValue}
					disabled={column.disabled}
					options={column.filterOptions}
				/>
			) : (
				<InputFilter
					onChange={onInnerFiltersChange(column.field)}
					placeholder={column.title}
				/>
			);
		}
		return '';
	};

	return {
		renderColumnContent,
		renderFilters,
	};
};
