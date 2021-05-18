import React from 'react';

import PropTypes from 'prop-types';

import Label, { labelColors } from '../Label';

const StatusLabel = (props) => {
	const { active } = props;

	return (
		<Label
			color={active ? labelColors.complete : labelColors.rejected}
			variant="outlined">
			{active ? 'ACTIVE' : 'INACTIVE'}
		</Label>
	);
};

StatusLabel.propTypes = {
	active: PropTypes.bool,
};
export default StatusLabel;
