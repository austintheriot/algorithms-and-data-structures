const selectionSort = require('./selectionSort');

describe('Selection Sort', () => {
	it('Should sort a given array from lowest highest', () => {
		let arr = [10, 1, 4, 9, 7, 3];
		expect(selectionSort(arr)).toEqual([1, 3, 4, 7, 9, 10]);

		arr = [6, 4, 5, 8, 7, 9, 8];
		expect(selectionSort(arr)).toEqual([4, 5, 6, 7, 8, 8, 9]);
	});

	it('Should not throw error on edge cases,', () => {
		let arr = [];
		expect(selectionSort(arr)).toEqual([]);

		arr = [1];
		expect(selectionSort(arr)).toEqual([1]);
	});
});