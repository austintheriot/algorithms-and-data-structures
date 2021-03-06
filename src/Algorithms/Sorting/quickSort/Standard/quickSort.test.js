import sort from './quickSort';
import * as sortingUtils from '../../../../utils/sortingUtils';

describe('Quick Sort', () => {
	it('Should sort in place', () => {
		let arr = [-10, 1, -4, 9, 7, 3];
		expect(sort(arr, 0, arr.length - 1)).toBe(arr);
	});

	it('Should successfully sort edge cases,', () => {
		let arr = [];
		expect(sort(arr, 0, arr.length - 1)).toEqual([]);

		arr = [1];
		expect(sort(arr, 0, arr.length - 1)).toEqual([1]);
	});

	it('Should sort a given array from lowest highest', () => {
		sortingUtils.testPositiveIntegerSorting(sort);
		sortingUtils.testIntegerSorting(sort);
		sortingUtils.testDecimalSorting(sort);
	});
});
