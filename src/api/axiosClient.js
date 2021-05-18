import axios from 'axios';

import { appConfig, env } from 'constants/config';

const client = axios.create({
	baseURL: `${appConfig.apiUrl}/pricing/api/`,
	// TODO remove it after correct auth implementation on back-end
	...(process.env.NODE_ENV === env.development && 	{
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
