import React from 'react';

import PropTypes from 'prop-types';

import PriceListForm from '../components/PriceListForm';
import { useCreatePriceList } from './useCreatePriceList';

const CreatePriceList = (props) => {
	const { open, onClose } = props;
	const {
		errorMessage,
		successMessage,
		onCreatePriceList,
		onInnerClose,
	} = useCreatePriceList(onClose);
	return (
		<PriceListForm
			onSubmit={onCreatePriceList}
			open={open}
			onClose={onInnerClose}
			errorMessage={errorMessage}
			successMessage={successMessage}
			isCreate
		/>
	);
};

CreatePriceList.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};
export default CreatePriceList;
