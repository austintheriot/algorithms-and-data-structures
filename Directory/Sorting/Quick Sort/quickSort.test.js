const quickSort = require('./quickSort');

describe('Merge Sort', () => {
	it('Should sort a given array from lowest highest', () => {
		let arr = [-10, 1, -4, 9, 7, 3];
		expect(quickSort(arr)).toEqual([-10, -4, 1, 3, 7, 9]);

		arr = [-8.8, 0, 6, -1, 5, 8, 4, -5.4, 7, 9, 8];
		expect(quickSort(arr)).toEqual([-8.8, -5.4, -1, 0, 4, 5, 6, 7, 8, 8, 9]);
	});

	it('Should not throw error on edge cases,', () => {
		let arr = [];
		expect(quickSort(arr)).toEqual([]);

		arr = [1];
		expect(quickSort(arr)).toEqual([1]);
	});

	it('Should not modify the original array,', () => {
		let arr = [5, 4, 3, 2, 1, 0];
		let sortedArr = quickSort(arr);
		expect(sortedArr).not.toBe(arr);
	});
});
