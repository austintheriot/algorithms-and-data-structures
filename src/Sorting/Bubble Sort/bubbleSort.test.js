import sort from './bubbleSort';
import * as sortingUtils from '../../utils/sortingUtils';

describe('Bubble Sort', () => {
	it('Should sort a given array from lowest to highest', () => {
		sortingUtils.testPositiveIntegerSorting(sort);
		sortingUtils.testIntegerSorting(sort);
		sortingUtils.testDecimalSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		let arr = [];
		expect(sort(arr)).toEqual([]);

		arr = [1];
		expect(sort(arr)).toEqual([1]);
	});

	it('Should modify the original array,', () => {
		let arr = [5, 4, 3, 2, 1, 0];
		let arrCopy = [...arr];
		let sortedArr = sort(arr);
		expect(sortedArr).toBe(arr);
		expect(arr).not.toEqual(arrCopy);
	});
});
