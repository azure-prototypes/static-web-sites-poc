import React from 'react';

import {
	Box, Link, Popover,
} from '@material-ui/core';

import { numberToMoney } from 'utils/number';

import { PriceListTypes } from '../constants';
import PriceBreaks from './components/PriceBreaks';
import { fieldNames } from './constants';
import { useTableConfig } from './useTableConfig';

export const tableColumns = (listType) => {
	const isOfp = listType === PriceListTypes.OFP;
	const columnWidth = isOfp ? '10%' : '12%';

	const {
		anchorEl,
		openProductId,
		onViewPricesClick,
		onModalClose,
	} = useTableConfig();

	return [
		{
			title: 'SKU',
			field: fieldNames.vikingSku,
			customRender: (row) => row.vikingSku,
			filtering: true,
			width: columnWidth,
			sorting: true,
		},
		{
			title: 'Name',
			field: fieldNames.productName,
			customRender: (row) => row.productName,
			filtering: true,
			width: '20%',
			sorting: true,
		},
		{
			title: 'Cost price',
			field: fieldNames.costPrice,
			width: columnWidth,
			filtering: true,
			customRender: (row) => numberToMoney(row.costPrice, row.currency),
			sorting: true,
		},
		{
			title: 'Selling price',
			field: fieldNames.sellingPrice,
			width: columnWidth,
			filtering: true,
			customRender: (row) => numberToMoney(row.sellingPrice, row.currency),
			sorting: true,
		},
		{
			title: 'Brand name',
			field: fieldNames.brandName,
			customRender: (row) => row.brandName,
			filtering: true,
			sorting: true,
			width: columnWidth,
		},
		{
			title: 'Category',
			field: fieldNames.categoryName,
			customRender: (row) => row.categoryName,
			filtering: true,
			sorting: true,
			width: columnWidth,
		},
		{
			title: 'Vendor',
			field: fieldNames.vendorName,
			customRender: (row) => row.vendorName,
			filtering: true,
			sorting: true,
			width: columnWidth,
		},
		{
			title: 'Vendor SKU',
			field: fieldNames.vendorSku,
			filtering: true,
			sorting: true,
			width: columnWidth,
		},
		...(isOfp
			? [{
				title: 'Price breaks',
				field: fieldNames.priceBreaks,
				width: columnWidth,
				customRender: (row) => {
					const open = Boolean(anchorEl) && openProductId === row.productId;
					return <Box>
						<Link id={row.productId} onClick={onViewPricesClick(row.productId)}>View prices</Link>
						<Popover
							id={row.productId}
							open={open}
							anchorEl={anchorEl}
							onClose={onModalClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
						>
							<PriceBreaks price={row} />
						</Popover>
					</Box>;
				},
			}] : []),
	];
};
