import React from 'react';

import { Box, Typography, Dialog } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Modal = (props) => {
	const {
		open,
		onClose,
		className,
		title,
		children,
		footer,
		maxWidth,
		...rest
	} = props;
	const classes = styles({ maxWidth });

	return (
		<Dialog maxWidth="lg" onClose={onClose} open={open}>
			<div {...rest} className={clsx(classes.root, className)}>
				<div className={classes.header}>
					<Box display="flex" justifyContent="space-between">
						<Typography variant="h3">{title}</Typography>
						<Close onClick={onClose} className={classes.icon} />
					</Box>
				</div>
				<div className={classes.content}>{children}</div>
				<div className={classes.actions}>{footer}</div>
			</div>
		</Dialog>
	);
};

Modal.propTypes = {
	maxWidth: PropTypes.number,
	title: PropTypes.string,
	children: PropTypes.node,
	footer: PropTypes.node,
	className: PropTypes.string,
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

export default Modal;
