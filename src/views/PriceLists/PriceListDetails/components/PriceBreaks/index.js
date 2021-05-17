import React from 'react';

import { Box, Divider, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import { styles } from './styles';

const PriceBreaks = (props) => {
	const { price } = props;
	const classes = styles();
	const breaks = [2, 3, 4, 5];

	return (
		<Box p={2} className={classes.root}>
			<Box mb={1}>
				<Typography variant='h6'>Price break prices</Typography>
			</Box>
			<Box display="flex" flexDirection="row" mb={1}>
				<Box display='flex' flex={1}>
					<Typography variant='body1'>QTY</Typography>
				</Box>
				<Box display='flex' flex={1}>
					<Typography variant='body1'>Price</Typography>
				</Box>
			</Box>
			{ breaks.map((breakItem, index) => (
				<Box key={breakItem}>
					<Box key={breakItem} display="flex" flexDirection="row" mt={1}>
						<Box display='flex' flex={1} >
							<Typography variant='body1'>
								{price[`quantityBreak${breakItem}`] || 0}
							</Typography>
						</Box>
						<Box display='flex' flex={1}>
							<Typography variant='body1'>
								{price[`priceBreak${breakItem}`] || 0}
							</Typography>
						</Box>
					</Box>
					{ index !== breaks.length - 1
          && <Box mt={1}>
          	<Divider />
          </Box> }
				</Box>
			))}
		</Box>
	);
};

PriceBreaks.propTypes = {
	price: PropTypes.object,
};

export default PriceBreaks;
