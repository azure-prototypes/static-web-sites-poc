import React from 'react';

import { Typography, colors } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Label = (props) => {
	const {
		className, variant, color, shape, children, style, ...rest
	} = props;
	const classes = styles();

	const rootClassName = clsx(
		{
			[classes.root]: true,
			[classes.rounded]: shape === 'rounded',
		},
		className,
	);

	const finalStyle = { ...style };

	if (variant === 'contained') {
		finalStyle.backgroundColor = color;
		finalStyle.color = '#FFF';
	} else {
		finalStyle.border = `1px solid ${color}`;
		finalStyle.color = color;
	}

	return (
		<Typography
			{...rest}
			className={rootClassName}
			style={finalStyle}
			variant="overline">
			{children}
		</Typography>
	);
};

Label.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	color: PropTypes.string,
	shape: PropTypes.oneOf(['square', 'rounded']),
	style: PropTypes.object,
	variant: PropTypes.oneOf(['contained', 'outlined']),
};

Label.defaultProps = {
	style: {},
	color: colors.grey[600],
	variant: 'contained',
	shape: 'square',
};

export default Label;
export { labelColors } from './colors';
