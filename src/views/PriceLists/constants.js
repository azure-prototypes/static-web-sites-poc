export const PriceListTypes = {
	OFP: 'OFP',
	FCP: 'FCP',
	TIER1: 'TIER1',
	TIER2: 'TIER2',
	TIER3: 'TIER3',
	TIER4: 'TIER4',
	TIER5: 'TIER5',
	TIER6: 'TIER6',
};

export const PriceListFieldNames = {
	name: 'name',
	effortCode: 'effortCode',
	basePriceListId: 'basePriceListId',
	type: 'type',
	country: 'country',
	startDate: 'startDate',
	endDate: 'endDate',
};

export const UIMessages = {
	error: (message) => ({
		type: 'error',
		text: message,
	}),
	success: {
		type: 'success',
		text: 'Successfully published.',
	},
};
