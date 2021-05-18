export const mapDropdownValues = (obj) => Object.keys(obj).map((value) => ({
	value,
	label: obj[value],
}));
