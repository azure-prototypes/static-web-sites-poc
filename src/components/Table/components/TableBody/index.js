import React from 'react';

import {
	Checkbox, TableCell, TableRow, TableBody,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { isElementPresent } from 'utils/array';

import { styles } from './styles';

const TableContent = (props) => {
	const {
		columns,
		pageData,
		selectedRows,
		onSelectRow,
		selection,
		onRowClick,
	} = props;
	const classes = styles();

	return (
		<TableBody>
			{pageData.map((item, index) => (
				<TableRow
					hover
					key={index}
					className={classes.row}
					onClick={() => onRowClick(item)}
					selected={isElementPresent(selectedRows, index)}>
					{selection && (
						<TableCell padding="checkbox">
							<Checkbox
								checked={isElementPresent(selectedRows, index)}
								color="primary"
								onChange={(event) => onSelectRow(event, index)}
								value={isElementPresent(selectedRows, index)}
							/>
						</TableCell>
					)}
					{columns.map((column, innerIndex) => {
						const { customRender } = column;
						return (
							<TableCell key={innerIndex}>
								{customRender ? customRender(item) : item[column.field]}
							</TableCell>
						);
					})}
				</TableRow>
			))}
		</TableBody>
	);
};

TableContent.propTypes = {
	columns: PropTypes.array,
	pageData: PropTypes.array,
	selectedRows: PropTypes.array,
	onSelectRow: PropTypes.func,
	selection: PropTypes.bool,
	onRowClick: PropTypes.func,
};

export default TableContent;
