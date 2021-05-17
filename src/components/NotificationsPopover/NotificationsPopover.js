import React from 'react';

import {
	Popover,
	CardHeader,
	CardActions,
	Divider,
	Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { NotificationList, EmptyList } from './components';
import { styles } from './styles';

const NotificationsPopover = (props) => {
	const { notifications, anchorEl, ...rest } = props;

	const classes = styles();

	return (
		<Popover
			{...rest}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}>
			<div className={classes.root}>
				<CardHeader title="Notifications" />
				<Divider />
				{notifications.length > 0 ? (
					<NotificationList notifications={notifications} />
				) : (
					<EmptyList />
				)}
				<Divider />
				<CardActions className={classes.actions}>
					<Button component={RouterLink} size="small" to="#">
						See all
					</Button>
				</CardActions>
			</div>
		</Popover>
	);
};

NotificationsPopover.propTypes = {
	anchorEl: PropTypes.any,
	className: PropTypes.string,
	notifications: PropTypes.array.isRequired,
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default NotificationsPopover;
