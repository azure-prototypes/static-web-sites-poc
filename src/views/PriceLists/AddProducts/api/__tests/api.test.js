import { getProducts } from '..';
import { ProductsMock } from './mock';

describe('Add products to price list', () => {
	it('Get product list', async () => {
		// Act
		const { data } = await getProducts({ size: 1, page: 1 });

		// Assert
		if (data.length > 0) {
			expect(Object.keys(data[0])).toEqual(Object.keys(ProductsMock));
		} else {
			// eslint-disable-next-line no-console
			console.log('No data returned from GET: /products');
		}
	});
});
