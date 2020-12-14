import search from './binarySearchArray';
import * as sortingUtils from '../../utils/sortingUtils';

describe('Binary Search (Array)', () => {
	it('Should find the index of a number in an array', () => {
		let arr = sortingUtils.makeArray('integerSorted', 100);
		let i = sortingUtils.chooseRandomIndex(arr);
		expect(search(arr, arr[i])).toBe(i);

		arr = sortingUtils.makeArray('decimalSorted', 100);
		i = sortingUtils.chooseRandomIndex(arr);
		expect(search(arr, arr[i])).toBe(i);
	});

	it('Should find the index of a number at either end of an array', () => {
		let arr = sortingUtils.makeArray('integerSorted', 100);
		expect(search(arr, arr[0])).toBe(0);

		arr = sortingUtils.makeArray('integerSorted', 100);
		expect(search(arr, arr[99])).toBe(99);
	});

	it('Should return -1 when number is not found', () => {
		let arr = sortingUtils.makeArray('integerSorted', 100);
		expect(search(arr, 0.123456789)).toBe(-1);

		arr = sortingUtils.makeArray('decimalSorted', 100);
		expect(search(arr, 123456789)).toBe(-1);
	});

	it('Should return -1 when search element is nullish', () => {
		let arr = sortingUtils.makeArray('integerSorted', 100);
		expect(search(arr, arr[100])).toBe(-1);
		expect(search(arr, null)).toBe(-1);
	});
});
