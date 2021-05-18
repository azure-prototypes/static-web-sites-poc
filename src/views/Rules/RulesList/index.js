import React from 'react';

import { Box, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { PageTitle, Table } from 'components';
import { ORDER_DIRECTION } from 'constants/table';

import { RuleColumns } from '../constants';
import CreateRule from '../CreateRule';
import EditRule from '../EditRule';
import { styles } from './styles';
import { tableConfig } from './tableConfig';
import { useRulesList } from './useRulesList';

const RulesList = () => {
	const classes = styles();
	const {
		createOpen,
		editOpen,
		onCreateOpen,
		onCreateClose,
		onEditClose,
		getRulesList,
		onEditClick,
		editRuleData,
		goToPriceList,
		onSaveRule,
		tableRef,
	} = useRulesList();
	const { tabsOptions, columns } = tableConfig(onEditClick, goToPriceList);

	return (
		<Box className={classes.root}>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				marginBottom={2}>
				<PageTitle>Rules</PageTitle>
				<Button color="secondary" onClick={onCreateOpen} variant="contained">
					<Add />
					Add new rule
				</Button>
			</Box>
			<Table
				ref={tableRef}
				columns={columns}
				options={{
					searchTitle: 'Search rules',
					tabs: true,
					initialSort: {
						direction: ORDER_DIRECTION.desc,
						column: RuleColumns.active,
					},
				}}
				filterTabs={{
					tabs: tabsOptions,
				}}
				data={(query) => getRulesList(query)}
			/>
			<CreateRule onClose={onCreateClose} open={createOpen} />
			<EditRule
				onSave={onSaveRule}
				onClose={onEditClose}
				open={editOpen}
				fieldsData={editRuleData}
			/>
		</Box>
	);
};

export default RulesList;
