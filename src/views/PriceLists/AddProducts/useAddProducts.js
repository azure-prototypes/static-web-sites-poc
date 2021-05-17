import { useCallback, useMemo, useState } from 'react';

import { COUNTRIES } from 'constants/countries';
import { useFetch, useNavigation, useOpen } from 'hooks';
import { mapDropdownValues } from 'utils/ui';

import { getPriceListDetails } from '../PriceListDetails/api';
import { getProducts, addProducts } from './api';
import { productColumnNames } from './constants';

const countryOptions = mapDropdownValues(COUNTRIES);

export const useAddProducts = () => {
	const [isOpen, onOpen, onClose] = useOpen();
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [priceListDetails, setPriceListDetails] = useState({ type: '' });
	const { params } = useNavigation();
	const priceListId = useMemo(() => params.priceListId, [params]);
	const countryId = useMemo(() => params.countryId, [params]);
	const { loading: detailsLoading } = useFetch(getPriceListDetails, { priceListId },
		(response) => setPriceListDetails(response));

	const loadProducts = useCallback(
		async (filterParams) => {
			const data = await getProducts(filterParams, countryId);
			return data;
		},
		[getProducts, countryId],
	);

	const onAddProducts = useCallback(async () => {
		const response = await addProducts({
			priceListId: params.priceListId,
			productIds: selectedProducts.map((product) => product.productId),
		});
		if (!response) {
			onOpen();
		}
	}, [addProducts, onOpen, selectedProducts]);

	return {
		loadProducts,
		productColumnNames,
		countryOptions,
		priceListId,
		countryId,
		isOpen,
		onAddProducts,
		onClose,
		setSelectedProducts,
		priceListDetails,
		detailsLoading,
	};
};
