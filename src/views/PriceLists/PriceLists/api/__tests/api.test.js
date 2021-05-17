import { ORDER_DIRECTION } from 'constants/table';

import { getPriceLists } from '..';
import { PriceListColumns } from '../../constants';
import { PriceListMock } from './mock';

describe('Get list of price lists', () => {
	it('Get price lists', async () => {
		// Act
		const { data } = await getPriceLists({
			size: 1,
			page: 1,
			orderColumn: PriceListColumns.active,
			orderDirection: ORDER_DIRECTION.asc,
		});

		// Assert
		if (data.length > 0) {
			expect(Object.keys(data[0])).toEqual(Object.keys(PriceListMock));
		} else {
			// eslint-disable-next-line no-console
			console.log('No data returned from GET: /price-lists');
		}
	});
});
