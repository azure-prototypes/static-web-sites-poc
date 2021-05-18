export const env = {
	development: 'development',
	staging: 'staging',
	production: 'production',
};

export const appConfig = {
	apiUrl: process.env.NODE_ENV === env.staging ? '' : 'http://20.49.139.146',
};
