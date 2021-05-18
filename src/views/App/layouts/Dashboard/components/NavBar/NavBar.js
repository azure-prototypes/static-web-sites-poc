import React, { Fragment, useEffect } from 'react';

import { Drawer, Paper, Hidden } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Navigation from 'components/Navigation';
import { useRouter } from 'hooks';

import navigationConfig from './navigationConfig';
import { styles } from './styles';

const NavBar = (props) => {
	const {
		openMobile, onMobileClose, className, ...rest
	} = props;

	const classes = styles();
	const router = useRouter();

	useEffect(() => {
		if (openMobile) {
			if (onMobileClose) onMobileClose();
		}
	}, [router.location.pathname]);

	const navbarContent = (
		<div className={classes.content}>
			<nav>
				{navigationConfig.map((list, index) => (
					<Navigation
						component="div"
						key={index}
						pages={list.pages}
						title={list.title}
					/>
				))}
			</nav>
		</div>
	);

	return (
		<Fragment>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary">
					<div {...rest} className={clsx(classes.root, className)}>
						{navbarContent}
					</div>
				</Drawer>
			</Hidden>
			<Hidden>
				<Paper
					{...rest}
					className={clsx(classes.root, className)}
					elevation={1}
					square>
					{navbarContent}
				</Paper>
			</Hidden>
		</Fragment>
	);
};

NavBar.propTypes = {
	className: PropTypes.string,
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool,
};

export default NavBar;
