import { useCallback, useEffect, useState } from 'react';

import { useDebounce } from 'hooks';

export const useSearch = (onSearch) => {
	const [searchText, setSearchText] = useState('');

	const onInnerSearch = useCallback(
		(event) => {
			setSearchText(event.target.value);
		},
		[setSearchText],
	);

	const debouncedSearchText = useDebounce(searchText);

	useEffect(() => {
		onSearch(debouncedSearchText);
	}, [debouncedSearchText]);

	return {
		onInnerSearch,
	};
};
