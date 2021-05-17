import { useCallback, useEffect, useState } from 'react';

import { useDebounce } from 'hooks';

export const useInputFilter = (onChange) => {
	const [value, setValue] = useState(null);

	const onInnerChange = useCallback(
		(event) => {
			setValue(event.target.value);
		},
		[setValue],
	);

	const debouncedSearchText = useDebounce(value);

	useEffect(() => {
		onChange(debouncedSearchText);
	}, [debouncedSearchText]);

	return {
		onInnerChange,
	};
};
