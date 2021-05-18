module.exports = {
	verbose: true,
	moduleNameMapper: {
		'^api(.*)$': '<rootDir>/src/api$1',
		'^constants/config': '<rootDir>/src/constants/config',
		'^constants/countries': '<rootDir>/src/constants/countries',
		'^constants/table': '<rootDir>/src/constants/table',
	},
};
