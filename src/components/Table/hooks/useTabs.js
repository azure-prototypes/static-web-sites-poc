import { useCallback, useState } from 'react';

const useTabs = (initialTab) => {
	const [tab, setTab] = useState(initialTab);

	const onTabChange = useCallback((event, value) => {
		setTab(value);
	}, []);
	return {
		tab,
		onTabChange,
	};
};

export default useTabs;
