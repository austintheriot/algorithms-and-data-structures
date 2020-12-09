const sort = require('./radixSortDecimal.solution');
const testUtils = require('../../../../utils/testUtils');

describe('Radix Sort', () => {
	it('Should sort an array of numbers from lowest to highest', () => {
		testUtils.testPositiveIntegerSorting(sort);
		testUtils.testIntegerSorting(sort);
		testUtils.testDecimalSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		testUtils.testEdgeCases(sort);
	});

	it('Should not modify original array', () => {
		arr = [5, 0, -5];
		sort(arr);
		expect(arr).toEqual([5, 0, -5]);
	});
});
