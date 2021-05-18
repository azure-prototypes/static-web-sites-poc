import { useCallback, useState } from 'react';

const useOpen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState({});

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onOpen = useCallback((obj) => {
		setIsOpen(true);
		setData(obj);
	}, [setIsOpen, setData]);

	return [
		isOpen,
		onOpen,
		onClose,
		data,
	];
};

export default useOpen;
