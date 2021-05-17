import { useCallback, useState } from 'react';

export const useTableConfig = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [openProductId, setOpenProduct] = useState();

	const onViewPricesClick = useCallback((productId) => (event) => {
		setOpenProduct(productId);
		setAnchorEl(event.currentTarget);
	}, [setAnchorEl, setOpenProduct]);

	const onModalClose = useCallback(() => {
		setAnchorEl(null);
	}, [setAnchorEl]);
	return {
		anchorEl,
		openProductId,
		onViewPricesClick,
		onModalClose,
	};
};
