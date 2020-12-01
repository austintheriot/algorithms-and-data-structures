const quickSort = require('./quickSort');

describe('Quick Sort', () => {
	it('Should sort in place', () => {
		let arr = [-10, 1, -4, 9, 7, 3];
		expect(quickSort(arr, 0, arr.length - 1)).toBe(arr);
	});

	it('Should not throw error on edge cases,', () => {
		let arr = [];
		expect(quickSort(arr, 0, arr.length - 1)).toEqual([]);

		arr = [1];
		expect(quickSort(arr, 0, arr.length - 1)).toEqual([1]);
	});

	it('Should sort a given array from lowest highest', () => {
		let arr = [0, 5, 4, 3, 4, 6, 8];
		expect(quickSort(arr, 0, arr.length - 1)).toEqual([0, 3, 4, 4, 5, 6, 8]);

		arr = [0, 0, 1, 1, 2, 2, 3, 3, 5, 0];
		expect(quickSort(arr, 0, arr.length - 1)).toEqual([
			0,
			0,
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			5,
		]);

		arr = [-10, 1, -4, 9, 7, 3];
		expect(quickSort(arr, 0, arr.length - 1)).toEqual([-10, -4, 1, 3, 7, 9]);

		arr = [-8.8, 0, 6, -1, 5, 8, 4, -5.4, 7, 9, 8];
		expect(quickSort(arr, 0, arr.length - 1)).toEqual([
			-8.8,
			-5.4,
			-1,
			0,
			4,
			5,
			6,
			7,
			8,
			8,
			9,
		]);
	});
});
