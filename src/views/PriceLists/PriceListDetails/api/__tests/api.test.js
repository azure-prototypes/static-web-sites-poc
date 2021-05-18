import { getPriceListRows, getPriceListDetails } from '..';
import { getPriceLists } from '../../../PriceLists/api';
import { PriceListRowMock, PriceListDetailsMock } from './mock';

describe('Price list rows and details', () => {
	it('Gets price list rows', async () => {
		// Act
		const { data: priceLists } = await getPriceLists({ page: 1, size: 1 });

		if (priceLists.length > 0) {
			const { data } = await getPriceListRows({
				size: 1,
				page: 1,
				priceListId: priceLists[0].priceListId,
			});

			// Assert
			if (data.length > 0) {
				expect(Object.keys(data[0])).toEqual(Object.keys(PriceListRowMock));
			} else {
				// eslint-disable-next-line no-console
				console.log('No data returned from GET: /price-list-rows');
			}
		} else {
			// eslint-disable-next-line no-console
			console.log('No data returned from GET: /price-lists');
		}
	});

	it('Get price list details', async () => {
		// Act
		const { data: priceLists } = await getPriceLists({ page: 1, size: 1 });

		if (priceLists.length > 0) {
			const priceListDetails = await getPriceListDetails({
				priceListId: priceLists[0].priceListId,
			});
			expect(Object.keys(priceListDetails)).toEqual(
				Object.keys(PriceListDetailsMock),
			);
		} else {
			// eslint-disable-next-line no-console
			console.log('No data returned from GET: /price-lists');
		}
	});
});
