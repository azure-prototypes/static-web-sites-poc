import React, { useCallback } from 'react';

import { Box, Link } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import { StatusLabel } from 'components';
import { mapDropdownValues } from 'utils/ui';

import { RuleTypeTabs, RuleColumns, TabValueAll } from '../constants';
import { styles } from './styles';

export const tableConfig = (onEditClick, goToPriceList) => {
	const onInnerEditClick = useCallback((rule) => () => onEditClick(rule), [onEditClick]);

	const classes = styles();

	const tabsOptions = [
		{ value: TabValueAll, label: 'ALL' },
		...mapDropdownValues(RuleTypeTabs),
	];

	const columns = useCallback((tab) => {
		const isAllTab = tab === TabValueAll;
		const columnWidth = isAllTab ? '15%' : '20%';
		return [
			{
				title: 'Name',
				field: RuleColumns.name,
				sorting: true,
				width: '30%',
			},
			{
				title: 'Value',
				field: RuleColumns.value,
				width: columnWidth,
				customRender: (rule) => `${rule.ruleValue}%`,
			},
			{
				title: 'Price lists applied',
				width: columnWidth,
				field: RuleColumns.priceListsApplied,
				sorting: false,
				customRender: (rule) => {
					const { entityRelation } = rule;
					if (entityRelation) {
						const { countryId, priceListId } = entityRelation;
						return <Link onClick={goToPriceList(priceListId, countryId)}>Go to price list</Link>;
					}
					return null;
				},
			},
			{
				title: 'Status',
				field: RuleColumns.active,
				width: columnWidth,
				sorting: true,
				customRender: (rule) => <StatusLabel active={rule.active} />,
			},
			...(isAllTab
				? [
					{
						title: 'Type',
						width: columnWidth,
						field: RuleColumns.ruleType,
						sorting: true,
					},
				]
				: []),
			{
				title: 'Owner',
				width: columnWidth,
				field: RuleColumns.owner,
				sorting: false,
				customRender: () => 'Bjorn',
			},
			{
				title: '',
				field: 'actions',
				width: '4%',
				customRender: (rule) => (
					<Box className={classes.editColumn} onClick={onInnerEditClick(rule)}>
						<Edit className={classes.editIcon} />
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
