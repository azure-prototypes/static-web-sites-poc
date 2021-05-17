import { useCallback, useState } from 'react';

const useSearch = () => {
	const [searchText, setSearchText] = useState();

	const onSearch = useCallback(
		(value) => {
			setSearchText(value);
		},
		[setSearchText],
	);

	return {
		searchText,
		onSearch,
	};
};

export default useSearch;
