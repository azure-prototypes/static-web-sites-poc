import { RuleFieldNames as fieldNames } from '../../constants';

export const TierRequiredFields = (isCreate) => (isCreate
	? [
		fieldNames.name,
		fieldNames.ruleType,
		fieldNames.hierarchyLevel,
		fieldNames.priceList,
	]
	: []);
