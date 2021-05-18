import React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { styles } from './styles';

const NotificationList = (props) => {
	const { notifications, className, ...rest } = props;

	const classes = styles();

	return (
		<List {...rest} className={clsx(classes.root, className)} disablePadding>
			{notifications.map((notification, i) => (
				<ListItem
					className={classes.listItem}
					component={RouterLink}
					divider={i < notifications.length - 1}
					key={notification.id}
					to="#">
					<ListItemText
						primary={notification.title}
						primaryTypographyProps={{ variant: 'body1' }}
					/>
					<ArrowForwardIcon className={classes.arrowForwardIcon} />
				</ListItem>
			))}
		</List>
	);
};

NotificationList.propTypes = {
	className: PropTypes.string,
	notifications: PropTypes.array.isRequired,
};

export default NotificationList;
