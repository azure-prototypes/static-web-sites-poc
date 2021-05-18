import { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

export const useBreadCrumbs = () => {
	const history = useHistory();

	const onBack = useCallback(() => {
		history.goBack();
	}, [history]);

	return {
		onBack,
	};
};
