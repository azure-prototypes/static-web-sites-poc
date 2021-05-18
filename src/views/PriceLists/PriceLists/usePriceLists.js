import { useCallback, useState } from 'react';

import { useHistory } from 'react-router';

import { ROUTES } from 'constants/routes';
import { useNavigation, useOpen } from 'hooks';

import { UIMessages } from '../constants';
import { getPriceLists, publishPriceLists } from './api';

export const usePriceLists = () => {
	const { navigateTo } = useNavigation();
	const [isOpen, onOpen, onClose] = useOpen();
	const [messageVisible, openMessage, closeMessage, messageData] = useOpen();
	const [file, setFile] = useState();
	const [selectedLists, setSelectedLists] = useState([]);
	const history = useHistory();

	const onPriceListClick = useCallback(
		(rowData) => {
			navigateTo(
				`${ROUTES.priceListDetails}/${rowData.priceListId}/${rowData.countryId}`,
			);
		},
		[navigateTo],
	);

	const onFileChange = useCallback((inputFile) => {
		setFile(inputFile);
	}, [setFile]);

	const onSuccessImport = useCallback(() => {
		history.go(0);
	}, [history]);

	const onPublishClick = useCallback(async () => {
		const response = await publishPriceLists({
			priceListIds: selectedLists.map((item) => item.priceListId),
		});

		if (response.message) {
			openMessage(UIMessages.error(response.message));
		} else {
			openMessage(UIMessages.success);
		}
	}, [selectedLists]);

	return {
		file,
		getPriceLists,
		onPriceListClick,
		onPublishClick,
		isOpen,
		onOpen,
		onClose,
		onFileChange,
		onSuccessImport,
		setSelectedLists,
		messageVisible,
		closeMessage,
		messageData,
	};
};
