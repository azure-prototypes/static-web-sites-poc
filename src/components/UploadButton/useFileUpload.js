import { useCallback } from 'react';

export const useFileUpload = (onChange) => {
	const onFileChange = useCallback((event) => {
		const file = event.target.files[0];
		onChange(file);
		event.target.value = null;
	}, [onChange]);

	return {
		onFileChange,
	};
};
