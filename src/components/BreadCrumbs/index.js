import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { useBreadCrumbs } from './useBreadCrumbs';

const BreadCrumbs = (props) => {
	const { title } = props;
	const { onBack } = useBreadCrumbs();
	const classes = styles();

	return (
		<Box
			className={classes.root}
			onClick={onBack}
			display="flex"
			flexDirection="row"
			alignItems="center">
			<ArrowBackIos className={classes.icon} />
			<Box pl={1}>
				<Typography component="h2" variant="overline">
					{title}
				</Typography>
			</Box>
		</Box>
	);
};

BreadCrumbs.propTypes = {
	title: PropTypes.string,
};

export default BreadCrumbs;
