import { useCallback, useState } from 'react';

const useFilters = () => {
	const [filters, setFilters] = useState({});

	const onFiltersChange = useCallback(
		(name, value) => {
			if (value !== null) {
				const newFilters = { ...filters, [name]: value };
				setFilters(newFilters);
			}
		},
		[setFilters, filters],
	);

	return {
		filters,
		onFiltersChange,
	};
};

export default useFilters;
