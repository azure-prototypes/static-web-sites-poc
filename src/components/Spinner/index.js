import React from 'react';

import { Box, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

const Spinner = (props) => {
	const { loading, children, paddingY = 3 } = props;
	return loading
		? <Box display="flex" flex={1} justifyContent='center' py={paddingY}>
			  <CircularProgress />
		  </Box>
		: children;
};

Spinner.propTypes = {
	loading: PropTypes.bool,
	children: PropTypes.node,
	paddingY: PropTypes.number,
};
export default Spinner;
