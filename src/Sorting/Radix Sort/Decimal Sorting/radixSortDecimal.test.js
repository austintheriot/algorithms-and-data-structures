const sort = require('./radixSortDecimal.solution');
const sortingUtils = require('../../../../utils/sortingUtils');

describe('Radix Sort', () => {
	it('Should sort an array of numbers from lowest to highest', () => {
		sortingUtils.testPositiveIntegerSorting(sort);
		sortingUtils.testIntegerSorting(sort);
		sortingUtils.testDecimalSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		sortingUtils.testEdgeCases(sort);
	});

	it('Should not modify original array', () => {
		arr = [5, 0, -5];
		sort(arr);
		expect(arr).toEqual([5, 0, -5]);
	});
});
