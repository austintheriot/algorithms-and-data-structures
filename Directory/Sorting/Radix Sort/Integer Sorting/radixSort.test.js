const radixSort = require('./radixSort.solution');

describe('Radix Sort', () => {
	it('Should sort an array of positive integers from lowest highest', () => {
		let arr = [199, 1, 45, 0, 9, 7, 3];
		expect(radixSort(arr)).toEqual([0, 1, 3, 7, 9, 45, 199]);

		arr = [6, 4, 5, 8, 7, 9, 8];
		expect(radixSort(arr)).toEqual([4, 5, 6, 7, 8, 8, 9]);
	});

	it('Should sort negative integers', () => {
		let arr = [7, -199, 31, 87, -9, 0, -45];
		expect(radixSort(arr)).toEqual([-199, -45, -9, 0, 7, 31, 87]);
	});

	it('Should successfully sort edge cases,', () => {
		let arr = [];
		expect(radixSort(arr)).toEqual([]);

		arr = [1];
		expect(radixSort(arr)).toEqual([1]);
	});

	it('Should ignore decimal places', () => {
		arr = [199.8, 1.1, 45.5, 0, 9, 7.9, 3];
		expect(radixSort(arr)).toEqual([0, 1.1, 3, 7.9, 9, 45.5, 199.8]);
	});

	it('Should produce a stable sort (using ignored decimal places to check)', () => {
		arr = [9, 112, 0, 110000578, 4, 1.0, 1.1, 1.2, 1.3];
		expect(radixSort(arr)).toEqual([
			0,
			1.0,
			1.1,
			1.2,
			1.3,
			4,
			9,
			112,
			110000578,
		]);
	});

	it('Should not modify original array', () => {
		arr = [5, 0, -5];
		radixSort(arr);
		expect(arr).toEqual([5, 0, -5]);
	});
});
