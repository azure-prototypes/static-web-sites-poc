import PropTypes from 'prop-types';

import { ORDER_DIRECTION } from 'constants/table';

const columnsType = PropTypes.arrayOf(
	PropTypes.shape({
		title: PropTypes.string,
		field: PropTypes.string,
		sorting: PropTypes.bool,
		sortingColumn: PropTypes.string,
		filtering: PropTypes.bool,
		filterOptions: PropTypes.array,
		filterValue: PropTypes.string,
		customRender: PropTypes.func,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		disabled: PropTypes.bool,
	}),
);

export const TablePropTypes = {
	className: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
	columns: PropTypes.oneOfType([PropTypes.func, columnsType]),
	options: PropTypes.shape({
		rowsPerPageOptions: PropTypes.array,
		rowsPerPageDefault: PropTypes.number,
		searchTitle: PropTypes.string,
		tabs: PropTypes.bool,
		initialSort: PropTypes.shape({
			direction: PropTypes.oneOf([ORDER_DIRECTION.asc, ORDER_DIRECTION.desc]),
			column: PropTypes.string,
		}),
		filtering: PropTypes.bool,
		tableActions: PropTypes.node,
		selection: PropTypes.bool,
		onSelection: PropTypes.func,
		onRowClick: PropTypes.func,
	}),
	filterTabs: PropTypes.shape({
		tabs: PropTypes.array,
		tab: PropTypes.string,
	}),
};

export const TableDefaultProps = {
	data: [],
	columns: [],
	options: {},
	filterTabs: {},
};
