export const numberToMoney = (number, currency) => {
	if (number) {
		return `${currency} ${(Math.round((number + Number.EPSILON) * 100) / 100).toFixed(2)}`;
	}

	return '';
};
