import { env } from './config';

const basePath = process.env.NODE_ENV === env.staging ? '/pricing/ui' : '';

export const ROUTES = {
	rules: `${basePath}/rules`,
	priceLists: `${basePath}/`,
	priceListDetails: `${basePath}/price-lists/details`,
	addProductsToPL: `${basePath}/price-lists/add-products`,
};
