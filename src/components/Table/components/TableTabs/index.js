import React from 'react';

import { Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';

import { styles } from './styles';

const TableTabs = (props) => {
	const { tab: selectedTab, tabs, onTabChange } = props;
	const classes = styles();

	return (
		<Tabs
			className={classes.root}
			onChange={onTabChange}
			scrollButtons="auto"
			value={selectedTab}
			variant="scrollable">
			{tabs.map((tab) => (
				<Tab key={tab.value} label={tab.label} value={tab.value} />
			))}
		</Tabs>
	);
};

TableTabs.propTypes = {
	tabs: PropTypes.array,
	tab: PropTypes.string,
	onTabChange: PropTypes.func,
};

TableTabs.defaultProps = {
	tabs: [],
};

export default TableTabs;
