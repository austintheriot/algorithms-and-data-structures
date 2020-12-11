const bubbleSort = require('./bubbleSort');
const sortingUtils = require('../../utils/sortingUtils');

describe('Bubble Sort', () => {
	it('Should sort a given array from lowest to highest', () => {
		sortingUtils.testPositiveIntegerSorting(bubbleSort);
		sortingUtils.testIntegerSorting(bubbleSort);
		sortingUtils.testDecimalSorting(bubbleSort);
	});

	it('Should successfully sort edge cases,', () => {
		let arr = [];
		expect(bubbleSort(arr)).toEqual([]);

		arr = [1];
		expect(bubbleSort(arr)).toEqual([1]);
	});

	it('Should modify the original array,', () => {
		let arr = [5, 4, 3, 2, 1, 0];
		let arrCopy = [...arr];
		let sortedArr = bubbleSort(arr);
		expect(sortedArr).toBe(arr);
		expect(arr).not.toEqual(arrCopy);
	});
});
