import React from 'react';

import { Box } from '@material-ui/core';

import {
	Table, BreadCrumbs, Alert, PageTitle, Button, Spinner,
} from 'components';
import { COUNTRIES } from 'constants/countries';
import { ORDER_DIRECTION } from 'constants/table';
import { numberToMoney } from 'utils/number';

import { styles } from './styles';
import { useAddProducts } from './useAddProducts';

const AddProducts = () => {
	const classes = styles();
	const {
		loadProducts,
		productColumnNames,
		countryOptions,
		countryId,
		onAddProducts,
		isOpen,
		onClose,
		setSelectedProducts,
		priceListDetails,
		detailsLoading,
	} = useAddProducts();

	return (
		<Box className={classes.root}>
			<Spinner loading={detailsLoading}>
				<BreadCrumbs title={priceListDetails.name} />
			</Spinner>
			<Box mt={1} mb={3}>
				<PageTitle>Add product to price list</PageTitle>
			</Box>
			{isOpen && (
				<Box mb={2}>
					<Alert
						open={isOpen}
						onClose={onClose}
						message="Product(s) added to the price list"
						severity="success" autoHideDuration={6000} />
				</Box>
			)}
			<Table
				columns={[
					{
						title: 'SKU',
						field: productColumnNames.vikingSku,
						filtering: true,
						width: '10%',
						sorting: true,
					},
					{
						title: 'Product name',
						field: productColumnNames.name,
						filtering: true,
						width: '30%',
						sorting: true,
					},
					{
						title: 'Country',
						field: productColumnNames.country,
						filtering: true,
						filterOptions: countryOptions,
						filterValue: countryId,
						customRender: () => COUNTRIES[countryId],
						width: '10%',
						disabled: true,
					},
					{
						title: 'Cost price',
						field: productColumnNames.costPrice,
						filtering: true,
						customRender: (product) => {
							const price = product.prices
								.find((priceItem) => priceItem.country.countryId === parseInt(countryId, 10));
							if (price) {
								const { costPrice, currency } = product.prices[0];
								return numberToMoney(costPrice, currency);
							}
							return null;
						},
						width: '10%',
						sorting: true,
					},
					{
						title: 'Brand name',
						field: productColumnNames.brand,
						filtering: true,
						width: '10%',
						sorting: true,
						sortingColumn: 'brand.name',
					},
					{
						title: 'Category',
						field: productColumnNames.category,
						filtering: true,
						width: '10%',
						sorting: true,
						sortingColumn: 'category.name',
					},
					{
						title: 'Vendor',
						field: productColumnNames.vendor,
						sortingColumn: 'vendor.name',
						filtering: true,
						width: '10%',
						sorting: true,
					},
					{
						title: 'Vendor SKU',
						field: productColumnNames.vendorSku,
						filtering: true,
						width: '10%',
						sorting: true,
					},
				]}
				options={{
					tabs: false,
					initialSort: {
						direction: ORDER_DIRECTION.asc,
						column: productColumnNames.name,
					},
					searchTitle: 'Search products',
					selection: true,
					onSelection: setSelectedProducts,
					tableActions: (
						<Button
							variant="contained"
							small
							onClick={onAddProducts}>
							Add to price list
						</Button>
					),
				}}
				data={(query) => loadProducts(query)}
			/>
		</Box>
	);
};

export default AddProducts;
