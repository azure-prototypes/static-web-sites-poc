export const RuleColumns = {
	name: 'name',
	value: 'value',
	active: 'active',
	ruleType: 'ruleType',
	productsApplied: 'productsApplied',
	priceListsApplied: 'priceListsApplied',
	owner: 'owner',
};

export const RuleTypeTabs = {
	MARGIN: 'Margin Rules',
	TIER: 'Tier Rules',
	ROUNDING: 'Rounding Rules',
	EXACT: 'Exact Rules',
};

export const TabValueAll = 'all';

export const RuleFieldNames = {
	name: 'name',
	ruleType: 'ruleType',
	hierarchyLevel: 'hierarchyLevel',
	percentageValue: 'percentageValue',
	lowRoundingValue: 'lowRoundingValue',
	highRoundingValue: 'highRoundingValue',
	priceList: 'priceList',
	country: 'country',
	value: 'value',
};

export const RuleTypeNames = {
	MARGIN: 'MARGIN',
	TIER: 'TIER',
	ROUNDING: 'ROUNDING',
	EXACT: 'EXACT',
};

export const RuleTypes = {
	[RuleTypeNames.MARGIN]: 'Margin',
	[RuleTypeNames.TIER]: 'Tier',
	[RuleTypeNames.ROUNDING]: 'Rounding',
	[RuleTypeNames.EXACT]: 'Exact',
};

export const HierarchyLevels = {
	GLOBAL: 'Global',
	COUNTRY: 'Country',
	PRICE_LIST: 'Price list',
	CATEGORY: 'Category',
	ATTRIBUTE: 'Attribute',
	PRODUCT: 'Product',
};
