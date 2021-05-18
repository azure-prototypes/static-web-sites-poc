import React, { useCallback } from 'react';

import { Box } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

import { StatusLabel } from 'components';
import { COUNTRIES } from 'constants/countries';

import { PriceListTypes } from '../constants';
import { PriceListColumns, TabValueAll } from './constants';
import { styles } from './styles';

export const tableConfig = (onPriceListClick) => {
	const classes = styles();

	const tabsOptions = [
		{ value: TabValueAll, label: 'ALL' },
		...Object.keys(PriceListTypes).map((type) => ({
			value: type,
			label: type,
		})),
	];

	const columns = useCallback((tab) => {
		const isAllTab = tab === TabValueAll;
		const columnWidth = isAllTab ? '15%' : '20%';
		return [
			{
				title: 'Name',
				field: PriceListColumns.name,
				sorting: true,
				width: '40%',
			},
			{
				title: 'Number of products',
				width: columnWidth,
				field: PriceListColumns.numberOfProducts,
				sortingColumn: 'priceListRows.size',
				sorting: true,
			},
			{
				title: 'Status',
				field: PriceListColumns.active,
				width: columnWidth,
				sorting: true,
				customRender: (priceList) => <StatusLabel active={priceList.active} />,
			},
			...(isAllTab
				? [
					{
						title: 'Type',
						width: columnWidth,
						field: PriceListColumns.type,
						sorting: true,
					},
				]
				: []),
			{
				title: 'Country',
				width: columnWidth,
				field: PriceListColumns.country,
				customRender: (priceList) => COUNTRIES[priceList.countryId],
				sorting: true,
			},
			{
				title: '',
				field: 'actions',
				width: '5%',
				customRender: (row) => (
					<Box className={classes.rowArrow} onClick={() => onPriceListClick(row)}>
						<ArrowForward className={classes.arrowIcon} />
					</Box>
				),
			},
		];
	}, []);

	return {
		tabsOptions,
		columns,
	};
};
