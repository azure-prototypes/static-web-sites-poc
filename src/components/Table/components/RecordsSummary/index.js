import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const RecordsSummary = (props) => {
	const { totalCount, page, rowsPerPage } = props;
	return (
		<Typography color="textSecondary" gutterBottom variant="body2">
			{totalCount} Records found. Page {page} of{' '}
			{Math.ceil(totalCount / rowsPerPage)}
		</Typography>
	);
};

RecordsSummary.propTypes = {
	totalCount: PropTypes.number,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
};

export default RecordsSummary;
