import { useCallback, useRef, useState } from 'react';

import { ROUTES } from 'constants/routes';
import { useNavigation, useOpen } from 'hooks';

import { getRulesList } from './api';

export const useRulesList = () => {
	const { navigateTo } = useNavigation();
	const [
		createOpen,
		onCreateOpen,
		onCreateClose,
	] = useOpen();
	const [
		editOpen,
		onEditOpen,
		onEditClose,
	] = useOpen();
	const [editRuleData, setEditRuleData] = useState({});
	const tableRef = useRef();

	const onEditClick = useCallback(
		(ruleData) => {
			ruleData.value = ruleData.ruleValue.toString();
			setEditRuleData(ruleData);
			onEditOpen();
		},
		[onEditOpen, setEditRuleData],
	);

	const goToPriceList = useCallback((priceListId, countryId) => () => {
		navigateTo(`${ROUTES.priceListDetails}/${priceListId}/${countryId}`, { route: ROUTES.rules });
	}, [navigateTo]);

	const onSaveRule = useCallback(() => {
		tableRef.current.updateTable();
	}, [tableRef]);

	return {
		createOpen,
		editOpen,
		onCreateOpen,
		onCreateClose,
		onEditClose,
		onEditClick,
		editRuleData,
		getRulesList,
		goToPriceList,
		onSaveRule,
		tableRef,
	};
};
