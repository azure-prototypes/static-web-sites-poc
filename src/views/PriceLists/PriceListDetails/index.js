import React from 'react';

import { Box, Button, Typography } from '@material-ui/core';
import {
	Add, Edit, DeleteOutline, Refresh, Publish,
} from '@material-ui/icons';

import {
	BreadCrumbs, PageTitle, Label, labelColors, Table, Spinner, Alert,
} from 'components';
import { COUNTRIES } from 'constants/countries';
import { ORDER_DIRECTION } from 'constants/table';

import { PriceListTypes } from '../constants';
import EditPriceList from '../EditPriceList';
import { getPriceListRows } from './api';
import { styles } from './styles';
import { tableColumns } from './tableConfig';
import { usePriceListDetails } from './usePriceListDetails';

const PriceListDetails = () => {
	const {
		priceListId,
		countryId,
		priceListDetails,
		detailsLoading,
		onAddProducts,
		onEditSettings,
		onReCalculate,
		onDeleteList,
		onPublishList,
		onClose,
		isOpen,
		onSubmit,
		backTitle,
		messageVisible,
		closeMessage,
		messageData,
		tableRef,
	} = usePriceListDetails();

	const classes = styles();

	return (
		<Box flex={1} p={3}>
			<Box display="flex" justifyContent="space-between" flexDirection="row">
				<BreadCrumbs title={backTitle} />
				<Box>
					<Button onClick={onEditSettings} className={classes.button}>
						<Edit className={classes.buttonIcon} />
							Edit Settings
					</Button>
					<Button onClick={onDeleteList} className={classes.button} disabled>
						<DeleteOutline className={classes.buttonIcon} />
							Delete List
					</Button>
					{ priceListDetails.type === PriceListTypes.FCP
						&& <Button onClick={onPublishList} className={classes.button}>
							<Publish className={classes.buttonIcon} />
						Publish
						</Button> }
					<Button
						onClick={onReCalculate}
						className={classes.button}
						disabled={!priceListDetails.type.includes('TIER')}>
						<Refresh className={classes.buttonIcon} />
							(Re)Calculate
					</Button>
					<Button color="secondary" onClick={onAddProducts} variant="contained">
						<Add />
							Add product(s)
					</Button>
				</Box>
			</Box>
			{messageVisible && <Box my={2}>
				<Alert
					open={messageVisible}
					onClose={closeMessage}
					message={messageData.text} severity={messageData.type} autoHideDuration={6000}/>
			</Box> }
			<Spinner loading={detailsLoading}>
				<Box mt={1} mb={3}>
					<PageTitle>
						<Box display="flex" alignItems="center">
							<span>{priceListDetails.name}</span>
							<Label
								className={classes.status}
								color={
									priceListDetails.active
										? labelColors.complete
										: labelColors.rejected
								}
								variant="outlined">
								{priceListDetails.active ? 'ACTIVE' : 'INACTIVE'}
							</Label>
							<Typography variant='h6'>{COUNTRIES[countryId]}</Typography>
						</Box>
					</PageTitle>
				</Box>
			</Spinner>
			<Table
				ref={tableRef}
				columns={tableColumns(priceListDetails.type)}
				options={{
					searchTitle: 'Search products',
					initialSort: {
						direction: ORDER_DIRECTION.asc,
						column: 'productName',
					},
				}}
				data={(query) => getPriceListRows({ priceListId, ...query })}
			/>
			<EditPriceList
				onSubmit={onSubmit}
				open={isOpen}
				onClose={onClose}
				priceListDetails={priceListDetails}
			/>
		</Box>
	);
};

export default PriceListDetails;
