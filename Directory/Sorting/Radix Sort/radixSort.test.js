const radixSort = require('./radixSort');

describe('Merge Sort', () => {
	it('Should sort a given array from lowest highest', () => {
		let arr = [10, 1, 4, 9, 7, 3];
		expect(radixSort(arr)).toEqual([1, 3, 4, 7, 9, 10]);

		arr = [6, 4, 5, 8, 7, 9, 8];
		expect(radixSort(arr)).toEqual([4, 5, 6, 7, 8, 8, 9]);
	});

	it('Should not throw error on edge cases,', () => {
		let arr = [];
		expect(radixSort(arr)).toEqual([]);

		arr = [1];
		expect(radixSort(arr)).toEqual([1]);
	});
});
