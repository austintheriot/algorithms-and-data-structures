const radixSortDecimal = require('./radixSortDecimal.solution');
const testUtils = require('../../../../utils/testUtils');

describe('Radix Sort', () => {
	it('Should sort an array of numbers from lowest to highest', () => {
		testUtils.testPositiveIntegerSorting(radixSortDecimal);
		testUtils.testIntegerSorting(radixSortDecimal);
		testUtils.testDecimalSorting(radixSortDecimal);
	});

	it('Should successfully sort edge cases,', () => {
		let arr = [];
		expect(radixSortDecimal(arr)).toEqual([]);

		arr = [1];
		expect(radixSortDecimal(arr)).toEqual([1]);
	});

	it('Should not modify original array', () => {
		arr = [5, 0, -5];
		radixSortDecimal(arr);
		expect(arr).toEqual([5, 0, -5]);
	});
});
