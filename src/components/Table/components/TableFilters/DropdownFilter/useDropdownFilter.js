import { useCallback, useState } from 'react';

export const useDropdownFilter = (onChange, defaultValue = 0) => {
	const [value, setValue] = useState(defaultValue);

	const onInnerChange = useCallback(
		(e) => {
			const { value: selectValue } = e.target;
			setValue(selectValue);
			onChange(selectValue);
		},
		[setValue, onChange],
	);

	return {
		value,
		onInnerChange,
	};
};
