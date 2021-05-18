export const PriceListRowMock = {
	productId: 3,
	name: 'Product3',
	vikingSku: 'Viking3',
	vendorSku: 'qwert',
	price: { costPrice: 0.01, sellingPrice: null, currency: 'EUR' },
	priceList: {
		priceListId: 2,
		basePriceListId: null,
		effortCode: '2',
		name: 'PriceList2',
		active: false,
		type: 'OFP',
		country: { countryId: 7, name: 'Netherlands', iso: 'NL' },
	},
	vendor: { vendorId: 1, name: 'JACOB ELEKTRONIK GMBH' },
	brand: { brandId: 1, name: 'LG' },
	category: { categoryId: 4637, name: 'Root' },
	country: undefined,
};

export const PriceListDetailsMock = {
	priceListId: 1,
	basePriceListId: null,
	effortCode: '1',
	name: 'PriceList1',
	active: false,
	type: 'OFP',
	country: '1',
	periods: [],
};
