const sort = require('./insertionSort');
const sortingUtils = require('../../../utils/sortingUtils');

describe('Insertion Sort', () => {
	it('Should sort a given array from lowest to highest', () => {
		sortingUtils.testPositiveIntegerSorting(sort);
		sortingUtils.testIntegerSorting(sort);
		sortingUtils.testDecimalSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		sortingUtils.testEdgeCases(sort);
	});

	it('Should modify the original array,', () => {
		let arr = [5, 4, 3, 2, 1, 0];
		let arrCopy = [...arr];
		let sortedArr = sort(arr);
		expect(sortedArr).toBe(arr);
		expect(arr).not.toEqual(arrCopy);
	});
});
