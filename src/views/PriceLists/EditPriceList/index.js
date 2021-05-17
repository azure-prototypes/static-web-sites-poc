import React from 'react';

import PropTypes from 'prop-types';

import PriceListForm from '../components/PriceListForm';
import { useEditPriceList } from './useEditPriceList';

const EditPriceList = (props) => {
	const { open, priceListDetails } = props;
	const {
		onInnerClose,
		errorMessage,
		successMessage,
		onEditPriceList,
	} = useEditPriceList(props);

	return (
		<PriceListForm
			fieldsData={priceListDetails}
			onSubmit={onEditPriceList}
			open={open}
			onClose={onInnerClose}
			errorMessage={errorMessage}
			successMessage={successMessage}
		/>
	);
};

EditPriceList.propTypes = {
	priceListDetails: PropTypes.object,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default EditPriceList;
