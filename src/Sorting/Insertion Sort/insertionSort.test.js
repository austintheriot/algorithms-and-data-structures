const sort = require('./insertionSort');
const testUtils = require('../../../utils/testUtils');

describe('Insertion Sort', () => {
	it('Should sort a given array from lowest to highest', () => {
		testUtils.testPositiveIntegerSorting(sort);
		testUtils.testIntegerSorting(sort);
		testUtils.testDecimalSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		testUtils.testEdgeCases(sort);
	});

	it('Should modify the original array,', () => {
		let arr = [5, 4, 3, 2, 1, 0];
		let arrCopy = [...arr];
		let sortedArr = sort(arr);
		expect(sortedArr).toBe(arr);
		expect(arr).not.toEqual(arrCopy);
	});
});
