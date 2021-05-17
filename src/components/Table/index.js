import React, { forwardRef } from 'react';

import {
	Card,
	CardActions,
	CardContent,
	Table,
	TablePagination,
	TableContainer,
} from '@material-ui/core';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
	TableTabs,
	TableSearch,
	TableHeader,
	TableBody,
	RecordsSummary,
} from './components';
import {
	useSelection,
	usePagination,
	useTable,
	useTabs,
	useSorting,
	useFilters,
	useSearch,
} from './hooks';
import { styles } from './styles';
import { TablePropTypes, TableDefaultProps } from './types';

const DataTable = forwardRef((props, ref) => {
	const {
		className,
		columns,
		data,
		options: {
			rowsPerPageDefault = 50,
			rowsPerPageOptions = [5, 10, 25, 50],
			searchTitle,
			tabs = false,
			selection = false,
			onSelection = () => {},
			onRowClick = () => {},
			initialSort = {},
			filtering,
			tableActions,
		},
		filterTabs,
	} = props;
	const classes = styles();

	// switching tabs
	const { tab, onTabChange } = useTabs(
		tabs && (filterTabs.tab || filterTabs.tabs[0].value),
	);

	// search
	const { searchText, onSearch } = useSearch();

	// filtering
	const { filters, onFiltersChange } = useFilters();

	// pagination
	const {
		page,
		rowsPerPage,
		onChangePage,
		onChangeRowsPerPage,
	} = usePagination(rowsPerPageDefault, tab, searchText, filters);

	// sorting
	const { orderColumn, orderDirection, onSort } = useSorting(initialSort);

	// table data
	const {
		pageData, totalCount, tableColumns,
	} = useTable({
		page,
		rowsPerPage,
		tab,
		data,
		orderColumn,
		orderDirection,
		filters,
		columns,
		searchText,
	}, ref);

	// rows selection
	const {
		selectedRows,
		onSelectRow,
		onSelectAllRows,
		isIndeterminate,
		isAllSelected,
	} = useSelection(pageData, onSelection, page, tab);

	return (
		<div className={clsx(classes.root, className)}>
			<TableSearch searchTitle={searchTitle} onSearch={onSearch} />
			<RecordsSummary
				totalCount={totalCount}
				page={page}
				rowsPerPage={rowsPerPage}
			/>
			{tabs && (
				<TableTabs tabs={filterTabs.tabs} tab={tab} onTabChange={onTabChange} />
			)}
			<Card>
				<CardContent className={classes.content}>
					<PerfectScrollbar>
						<TableContainer>
							<Table stickyHeader className={classes.table}>
								<TableHeader
									columns={tableColumns}
									isAllSelected={!!isAllSelected}
									isIndeterminate={isIndeterminate}
									onSelectAllRows={onSelectAllRows}
									orderColumn={orderColumn}
									orderDirection={orderDirection}
									onSort={onSort}
									onFiltersChange={onFiltersChange}
									filtering={filtering}
									tableActions={tableActions}
									selection={selection}
								/>
								<TableBody
									onRowClick={onRowClick}
									selection={selection}
									columns={tableColumns}
									pageData={pageData}
									selectedRows={selectedRows}
									onSelectRow={onSelectRow}
								/>
							</Table>
						</TableContainer>
					</PerfectScrollbar>
				</CardContent>
				<CardActions className={classes.actions}>
					<TablePagination
						component="div"
						count={totalCount}
						onChangePage={onChangePage}
						onChangeRowsPerPage={onChangeRowsPerPage}
						page={page - 1}
						rowsPerPage={rowsPerPage}
						rowsPerPageOptions={rowsPerPageOptions}
					/>
				</CardActions>
			</Card>
		</div>
	);
});

DataTable.propTypes = TablePropTypes;
DataTable.defaultProps = TableDefaultProps;

export default DataTable;
