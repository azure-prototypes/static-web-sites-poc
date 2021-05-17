import React from 'react';

import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { styles } from './styles';

const EmptyList = (props) => {
	const { className, ...rest } = props;

	const classes = styles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Typography variant="body2">No data</Typography>
		</div>
	);
};

EmptyList.propTypes = {
	className: PropTypes.string,
};

export default EmptyList;
