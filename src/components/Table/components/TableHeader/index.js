import React, { useMemo } from 'react';

import {
	Checkbox,
	TableCell,
	TableHead,
	TableBody,
	TableRow,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { useTableHeader } from './useTableHeader';

const TableHeader = (props) => {
	const {
		columns,
		isAllSelected,
		isIndeterminate,
		onSelectAllRows,
		orderDirection,
		orderColumn,
		onSort,
		onFiltersChange,
		filtering,
		tableActions,
		selection,
	} = props;

	const { renderColumnContent, renderFilters } = useTableHeader(
		onSort,
		onFiltersChange,
		orderDirection,
		orderColumn,
	);

	const actionsEnabled = useMemo(() => isAllSelected || isIndeterminate, [
		isAllSelected,
		isIndeterminate,
	]);

	const classes = styles();

	return (
		<>
			<colgroup>
				{ selection && <col width='50px' /> }
				{ columns.map((column, index) => <col key={index} width={column.width} />)}
			</colgroup>
			<TableHead>
				<TableRow>
					{selection && (
						<TableCell padding="checkbox">
							<Checkbox
								checked={isAllSelected}
								color="primary"
								indeterminate={isIndeterminate}
								onChange={onSelectAllRows}
							/>
						</TableCell>
					)}
					{actionsEnabled ? (
						<TableCell padding="checkbox" colSpan={columns.length} className={classes.actions}>
							{tableActions}
						</TableCell>
					) : (
						columns.map((column, index) => (
							<TableCell key={index}>
								{renderColumnContent(column)}
							</TableCell>
						))
					)}
				</TableRow>
			</TableHead>
			{!!filtering && (
				<TableBody>
					<TableRow>
						{selection && <TableCell className={classes.filterCell} />}
						{columns.map((column, index) => (
							<TableCell
								key={index}
								className={classes.filterCell}>
								{renderFilters(column)}
							</TableCell>
						))}
					</TableRow>
				</TableBody>
			)}
		</>
	);
};

TableHeader.propTypes = {
	isAllSelected: PropTypes.bool,
	isIndeterminate: PropTypes.bool,
	onSelectAllRows: PropTypes.func,
	columns: PropTypes.array,
	orderDirection: PropTypes.string,
	orderColumn: PropTypes.string,
	onSort: PropTypes.func,
	onFiltersChange: PropTypes.func,
	filtering: PropTypes.bool,
	tableActions: PropTypes.node,
	selection: PropTypes.bool,
};

export default TableHeader;
