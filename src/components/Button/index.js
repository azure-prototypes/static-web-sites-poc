import React from 'react';

import { Button } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { styles } from './styles';

const StyledButton = (props) => {
	const classes = styles();
	const {
		className, green, small, ...rest
	} = props;
	return (
		<Button
			{...rest}
			className={clsx(green && classes.greenButton, small && classes.smallButton, className)}
		/>
	);
};

StyledButton.propTypes = {
	className: PropTypes.string,
	green: PropTypes.bool,
	small: PropTypes.bool,
};

export default StyledButton;
