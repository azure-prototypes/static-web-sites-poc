import React, { useState, useRef } from 'react';

import {
	AppBar,
	IconButton,
	Toolbar,
	Hidden,
	Typography,
	Box,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { NotificationsPopover } from 'components';
import logo from 'icons/logo.png';

import { styles } from './styles';

const TopBar = (props) => {
	const { onOpenNavBarMobile, className, ...rest } = props;
	const notifications = [];
	const classes = styles();
	const notificationsRef = useRef(null);
	const [openNotifications, setOpenNotifications] = useState(false);

	const handleNotificationsClose = () => {
		setOpenNotifications(false);
	};

	return (
		<AppBar
			{...rest}
			className={clsx(classes.root, className)}
			position="fixed">
			<Toolbar>
				<Box flexDirection="row" display="flex" alignItems="center">
					<img alt="Logo" src={logo} width={94} />
					<Typography variant="h4" className={classes.titleText}>
						Pricing service
					</Typography>
				</Box>
				<div className={classes.flexGrow} />
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onOpenNavBarMobile}>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
			<NotificationsPopover
				anchorEl={notificationsRef.current}
				notifications={notifications}
				onClose={handleNotificationsClose}
				open={openNotifications}
			/>
		</AppBar>
	);
};

TopBar.propTypes = {
	className: PropTypes.string,
	onOpenNavBarMobile: PropTypes.func,
};

export default TopBar;
