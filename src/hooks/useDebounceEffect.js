import { useCallback, useEffect } from 'react';

const useDebounceEffect = (effect, deps, delay = 100) => {
	const callback = useCallback(effect, deps);

	useEffect(() => {
		const handler = setTimeout(() => {
			callback();
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [callback, delay]);
};

export default useDebounceEffect;
