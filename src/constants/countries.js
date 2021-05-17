const countryNames = {
	austria: 'Austria',
	germany: 'Germany',
	belgium: 'Belgium',
	switzerland: 'Switzerland',
	uk: 'United Kingdom',
	ireland: 'Ireland',
	netherlands: 'Netherlands',
	luxembourg: 'Luxembourg',
};

const countryCodes = {
	at: 'AT',
	de: 'DE',
	be: 'BE',
	ch: 'CH',
	uk: 'UK',
	ie: 'IE',
	nl: 'NL',
	lu: 'LU',
};

export const COUNTRIES = {
	1: countryNames.austria,
	2: countryNames.germany,
	3: countryNames.belgium,
	4: countryNames.switzerland,
	5: countryNames.uk,
	6: countryNames.ireland,
	7: countryNames.netherlands,
	8: countryNames.luxembourg,
};

export const COUNTRY_CODES = {
	1: countryCodes.at,
	2: countryCodes.de,
	3: countryCodes.be,
	4: countryCodes.ch,
	5: countryCodes.uk,
	6: countryCodes.ie,
	7: countryCodes.nl,
	8: countryCodes.lu,
};

export const ISO_TO_COUNTRY = {
	[countryCodes.at]: countryNames.austria,
	[countryCodes.de]: countryNames.germany,
	[countryCodes.be]: countryNames.belgium,
	[countryCodes.ch]: countryNames.switzerland,
	[countryCodes.uk]: countryNames.uk,
	[countryCodes.ie]: countryNames.ireland,
	[countryCodes.nl]: countryNames.netherlands,
	[countryCodes.lu]: countryNames.luxembourg,
};
