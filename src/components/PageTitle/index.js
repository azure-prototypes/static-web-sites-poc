import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const PageTitle = (props) => {
	const { children } = props;
	return <Typography variant="h2">{children}</Typography>;
};

PageTitle.propTypes = {
	children: PropTypes.node,
};
export default PageTitle;
