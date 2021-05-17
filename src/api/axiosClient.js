import axios from 'axios';

import { appConfig, env } from 'constants/config';

const client = axios.create({
	baseURL: `http://20.49.139.146/pricing/api/`,
	// TODO remove it after correct auth implementation on back-end
	...({
		headers: {
			Authorization: `Basic ${process.env.API_TOKEN}`,
		},
	}),
});

export const axiosClient = async (options) => {
	const onSuccess = (response) => response.data;

	const onError = (error) => error.response.data || error.message;

	const response = await client(options).then(onSuccess).catch(onError);

	return response;
};
