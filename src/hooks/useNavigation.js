import { useCallback } from 'react';

import { useHistory, useParams } from 'react-router-dom';

const useNavigation = () => {
	const history = useHistory();
	const params = useParams();

	const navigateTo = useCallback(
		(route, state) => {
			history.push(route, state);
		},
		[history],
	);

	return {
		navigateTo,
		params,
	};
};

export default useNavigation;
