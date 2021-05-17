import React, { Suspense, useState } from 'react';

import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Routes } from '../../Router';
import { NavBar, TopBar } from './components';
import { useStyles } from './styles';

const Dashboard = () => {
	const classes = useStyles();
	const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

	const handleNavBarMobileOpen = () => {
		setOpenNavBarMobile(true);
	};

	const handleNavBarMobileClose = () => {
		setOpenNavBarMobile(false);
	};

	return (
		<div className={classes.root}>
			<TopBar onOpenNavBarMobile={handleNavBarMobileOpen} />
			<div className={classes.container}>
				<NavBar
					className={classes.navBar}
					onMobileClose={handleNavBarMobileClose}
					openMobile={openNavBarMobile}
				/>
				<main className={classes.content}>
					<Suspense fallback={<LinearProgress />}>
						<Routes />
					</Suspense>
				</main>
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	route: PropTypes.object,
};

export default Dashboard;
