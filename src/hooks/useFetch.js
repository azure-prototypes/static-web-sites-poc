import { useEffect, useState } from 'react';

const useFetch = (apiFunction, params, onSuccess, onError) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState();

	useEffect(async () => {
		setLoading(true);
		try {
			const res = await apiFunction(params);
			setResponse(res);
			setLoading(false);
			onSuccess(res);
		} catch (ex) {
			setError(ex);
			onError(ex);
		}
	}, []);

	return { response, error, loading };
};

export default useFetch;
