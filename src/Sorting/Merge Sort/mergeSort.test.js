const sort = require('./mergeSort');
const testUtils = require('../../../utils/testUtils');

describe('Merge Sort', () => {
	it('Should sort a given array from lowest highest', () => {
		testUtils.testPositiveIntegerSorting(sort);
		testUtils.testIntegerSorting(sort);
		testUtils.testDecimalSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		let arr = [];
		expect(sort(arr)).toEqual([]);

		arr = [1];
		expect(sort(arr)).toEqual([1]);
	});

	it('Should not modify the original array,', () => {
		let arr = [5, 4, 3, 2, 1, 0];
		let originalArrCopy = [...arr];
		let sortedArr = sort(arr);
		expect(sortedArr).not.toBe(arr);
		expect(arr).toEqual(originalArrCopy);
	});
});
