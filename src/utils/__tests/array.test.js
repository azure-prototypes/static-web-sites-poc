import { isElementPresent } from '../array';
import { numberToMoney } from '../number';
import { isFunction } from '../object';
import { mapDropdownValues } from '../ui';

describe('Check if element present', () => {
	it('Should find element', () => {
		// Arrange
		const array = [1, 5, 7, 8];

		// Act
		const result = isElementPresent(array, 5);

		// Assert
		expect(result).toBeTruthy();
	});

	it('Should not find element', () => {
		// Arrange
		const array = [1, 5, 7, 8];

		// Act
		const result = isElementPresent(array, 10);

		// Assert
		expect(result).toBeFalsy();
	});
});

describe('Check if object is a function', () => {
	it('Should be function', () => {
		// Arrange
		const objFunction = (a, b) => a + b;

		// Act
		const result = isFunction(objFunction);

		// Assert
		expect(result).toBeTruthy();
	});

	it('Should not be function', () => {
		// Arrange
		const obj = { a: 2, b: 2 };

		// Act
		const result = isFunction(obj);

		// Assert
		expect(result).toBeFalsy();
	});
});

describe('Map constant to dropdown values', () => {
	it('Should return dropdown object', () => {
		// Arrange
		const obj = {
			MARGIN: 'Margin Rules',
			TIER: 'Tier Rules',
		};
		const expectedValue = [
			{ value: 'MARGIN', label: 'Margin Rules' },
			{ value: 'TIER', label: 'Tier Rules' },
		];

		// Act
		const result = mapDropdownValues(obj);

		// Assert
		expect(result).toEqual(expectedValue);
	});
});

describe('Format number to money', () => {
	it('Should return price in euros', () => {
		// Arrange
		const expectedValue = 'EUR 12.00';
		// Act
		const result = numberToMoney(12, 'EUR');

		// Assert
		expect(result).toEqual(expectedValue);
	});

	it('Should return price in pounds', () => {
		// Arrange
		const expectedValue = 'GBP 12.00';
		// Act
		const result = numberToMoney(12, 'GBP');

		// Assert
		expect(result).toEqual(expectedValue);
	});

	it('Should return price in pounds with correct rounding', () => {
		// Arrange
		const expectedValue = 'GBP 5.56';
		// Act
		const result = numberToMoney(5.555, 'GBP');

		// Assert
		expect(result).toEqual(expectedValue);
	});
});
