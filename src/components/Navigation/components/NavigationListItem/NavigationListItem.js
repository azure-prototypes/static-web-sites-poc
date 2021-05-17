import React, { useState, forwardRef } from 'react';

import { ListItem, Button, Collapse } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';

import { styles } from './styles';

const CustomRouterLink = forwardRef((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<RouterLink {...props} />
	</div>
));

CustomRouterLink.displayName = 'CustomRouterLink';

const NavigationListItem = (props) => {
	const {
		title,
		href,
		depth,
		children,
		icon: Icon,
		className,
		open: openProp,
		label: Label,
		...rest
	} = props;

	const classes = styles();
	const [open, setOpen] = useState(openProp);

	const handleToggle = () => {
		setOpen((opened) => !opened);
	};

	let paddingLeft = 8;

	if (depth > 0) {
		paddingLeft = 32 + 8 * depth;
	}

	const style = {
		paddingLeft,
	};

	if (children) {
		return (
			<ListItem
				{...rest}
				className={clsx(classes.item, className)}
				disableGutters>
				<Button className={classes.button} onClick={handleToggle} style={style}>
					{Icon && <Icon className={classes.icon} />}
					{title}
					{open ? (
						<ExpandLessIcon className={classes.expandIcon} color="inherit" />
					) : (
						<ExpandMoreIcon className={classes.expandIcon} color="inherit" />
					)}
				</Button>
				<Collapse in={open}>{children}</Collapse>
			</ListItem>
		);
	}
	return (
		<ListItem
			{...rest}
			className={clsx(classes.itemLeaf, className)}
			disableGutters>
			<Button
				activeClassName={classes.active}
				className={clsx(classes.buttonLeaf, `depth-${depth}`)}
				component={CustomRouterLink}
				exact
				style={style}
				to={href}>
				{Icon && <Icon className={classes.icon} />}
				{title}
				{Label && (
					<span className={classes.label}>
						<Label />
					</span>
				)}
			</Button>
		</ListItem>
	);
};

NavigationListItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	depth: PropTypes.number.isRequired,
	href: PropTypes.string,
	icon: PropTypes.any,
	label: PropTypes.any,
	open: PropTypes.bool,
	title: PropTypes.string.isRequired,
};

NavigationListItem.defaultProps = {
	depth: 0,
	open: false,
};

export default NavigationListItem;
