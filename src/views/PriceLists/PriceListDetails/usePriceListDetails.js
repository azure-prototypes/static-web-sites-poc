import {
	useCallback, useMemo, useRef, useState,
} from 'react';

import { useHistory } from 'react-router';

import { ROUTES } from 'constants/routes';
import { useNavigation, useOpen, useFetch } from 'hooks';

import { PriceListFieldNames as fieldNames, UIMessages } from '../constants';
import { publishPriceLists } from '../PriceLists/api';
import { getPriceListRows, getPriceListDetails, reCalculate } from './api';

export const usePriceListDetails = () => {
	const { navigateTo, params } = useNavigation();
	const history = useHistory();
	const [priceListDetails, setPriceListDetails] = useState({ type: '' });
	const [isOpen, onOpen, onClose] = useOpen();
	const priceListId = useMemo(() => params.priceListId, [params]);
	const countryId = useMemo(() => params.countryId, [params]);
	const [messageVisible, openMessage, closeMessage, messageData] = useOpen();
	const { loading: detailsLoading } = useFetch(getPriceListDetails, { priceListId },
		(response) => setPriceListDetails(response));
	const tableRef = useRef();

	const onAddProducts = useCallback(() => {
		navigateTo(
			`${ROUTES.addProductsToPL}/${params.priceListId}/${params.countryId}`,
		);
	}, [navigateTo]);
	const onEditSettings = useCallback(() => onOpen(), [onOpen]);
	const onReCalculate = useCallback(async () => {
		const response = await reCalculate({ priceListId });
		if (!response) {
			tableRef.current.updateTable();
		}
	}, [priceListId, tableRef]);
	const onDeleteList = useCallback(() => {}, []);

	const onPublishList = useCallback(async () => {
		const response = await publishPriceLists({
			countryId,
			priceListIds: [priceListId],
		});

		if (response.message) {
			openMessage(UIMessages.error(response.message));
		} else {
			openMessage(UIMessages.success);
		}
	}, [priceListId, countryId]);

	const onSubmit = useCallback(
		(fields) => {
			setPriceListDetails({
				...priceListDetails,
				[fieldNames.name]: fields[fieldNames.name],
			});
		},
		[priceListDetails, setPriceListDetails],
	);

	const backTitle = useMemo(() => (history.location.state?.route === ROUTES.rules
		? 'rules list' : 'price lists'), [history]);

	return {
		priceListId,
		countryId,
		priceListDetails,
		detailsLoading,
		onAddProducts,
		onEditSettings,
		onReCalculate,
		onDeleteList,
		onPublishList,
		getPriceListRows,
		isOpen,
		onClose,
		onSubmit,
		backTitle,
		messageVisible,
		closeMessage,
		messageData,
		tableRef,
	};
};
