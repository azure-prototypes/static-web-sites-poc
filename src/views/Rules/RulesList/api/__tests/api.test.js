import { ORDER_DIRECTION } from 'constants/table';

import { getRulesList } from '..';
import { RuleColumns } from '../../../constants';
import { RuleMock } from './mock';

describe('Get list of price rules', () => {
	it('Get rules lists', async () => {
		// Act
		const { data } = await getRulesList({
			size: 1,
			page: 1,
			orderColumn: RuleColumns.active,
			orderDirection: ORDER_DIRECTION.asc,
		});

		// Assert
		if (data.length > 0) {
			expect(Object.keys(data[0])).toEqual(Object.keys(RuleMock));
		} else {
			// eslint-disable-next-line no-console
			console.log('No data returned from GET: /price-rules');
		}
	});
});
