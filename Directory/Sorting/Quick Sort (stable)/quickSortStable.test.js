const quickSortStable = require('./quickSortStable');

describe('Stable Merge Sort', () => {
	it('Should sort an array of numbers from lowest highest', () => {
		let arr = [0, 5, 4, 3, 4, 6, 8];
		expect(quickSortStable(arr)).toEqual([0, 3, 4, 4, 5, 6, 8]);

		arr = [0, 0, 1, 1, 2, 2, 3, 3, 5, 0];
		expect(quickSortStable(arr)).toEqual([0, 0, 0, 1, 1, 2, 2, 3, 3, 5]);

		arr = [-10, 1, -4, 9, 7, 3];
		expect(quickSortStable(arr)).toEqual([-10, -4, 1, 3, 7, 9]);

		arr = [-8.8, 0, 6, -1, 5, 8, 4, -5.4, 7, 9, 8];
		expect(quickSortStable(arr)).toEqual([
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

	it('Should sort an array of objects, given a callback', () => {
		let preSortedArr = [
			{ value: 3 },
			{ value: 1 },
			{ value: 2 },
			{ value: 2 },
			{ value: 1 },
			{ value: 3 },
			{ value: 2 },
			{ value: 3 },
			{ value: 0 },
			{ value: 1 },
			{ value: 0 },
		];

		let comparisonArray = [
			{ value: 0 },
			{ value: 0 },
			{ value: 1 },
			{ value: 1 },
			{ value: 1 },
			{ value: 2 },
			{ value: 2 },
			{ value: 2 },
			{ value: 3 },
			{ value: 3 },
			{ value: 3 },
		];
		expect(quickSortStable(preSortedArr, (el) => el.value)).toEqual(
			comparisonArray
		);

		preSortedArr = [
			{ name: 'Micahel' },
			{ name: 'Max' },
			{ name: 'Bailey' },
			{ name: 'Susan' },
		];
		comparisonArray = [
			{ name: 'Bailey' },
			{ name: 'Max' },
			{ name: 'Micahel' },
			{ name: 'Susan' },
		];
		expect(quickSortStable(preSortedArr, (el) => el.name)).toEqual(
			comparisonArray
		);
	});

	it('Should produce a stable sort', () => {
		let preSortedArr = [
			{ value: 3, order: 0 },
			{ value: 3, order: 1 },
			{ value: 3, order: 2 },
			{ value: 1, order: 0 },
			{ value: 1, order: 1 },
			{ value: 1, order: 2 },
			{ value: 2, order: 0 },
			{ value: 2, order: 1 },
			{ value: 2, order: 2 },
			{ value: 4, order: 0 },
			{ value: 4, order: 1 },
			{ value: 4, order: 2 },
			{ value: 4, order: 3 },
			{ value: 4, order: 4 },
			{ value: 0, order: 0 },
			{ value: 0, order: 1 },
		];
		let comparisonArray = [
			{ value: 0, order: 0 },
			{ value: 0, order: 1 },
			{ value: 1, order: 0 },
			{ value: 1, order: 1 },
			{ value: 1, order: 2 },
			{ value: 2, order: 0 },
			{ value: 2, order: 1 },
			{ value: 2, order: 2 },
			{ value: 3, order: 0 },
			{ value: 3, order: 1 },
			{ value: 3, order: 2 },
			{ value: 4, order: 0 },
			{ value: 4, order: 1 },
			{ value: 4, order: 2 },
			{ value: 4, order: 3 },
			{ value: 4, order: 4 },
		];
		expect(quickSortStable(preSortedArr, (el) => el.value)).toEqual(
			comparisonArray
		);

		preSortedArr = [
			{ name: 'Max', age: 16 },
			{ name: 'Max', age: 18 },
			{ name: 'Max', age: 63 },
			{ name: 'Susan', age: 16 },
			{ name: 'Susan', age: 73 },
			{ name: 'Susan', age: 91 },
			{ name: 'Micahel', age: null },
			{ name: 'Bailey', age: 1 },
			{ name: 'Bailey', age: 18 },
		];
		comparisonArray = [
			{ name: 'Bailey', age: 1 },
			{ name: 'Bailey', age: 18 },
			{ name: 'Max', age: 16 },
			{ name: 'Max', age: 18 },
			{ name: 'Max', age: 63 },
			{ name: 'Micahel', age: null },
			{ name: 'Susan', age: 16 },
			{ name: 'Susan', age: 73 },
			{ name: 'Susan', age: 91 },
		];
		expect(quickSortStable(preSortedArr, (el) => el.name)).toEqual(
			comparisonArray
		);

		preSortedArr = [
			{ name: 'Susan', age: 16 },
			{ name: 'Max', age: 16 },
			{ name: 'Max', age: 63 },
			{ name: 'Susan', age: 73 },
			{ name: 'Micahel', age: null },
			{ name: 'Susan', age: 91 },
			{ name: 'Bailey', age: 1 },
			{ name: 'Bailey', age: 18 },
			{ name: 'Max', age: 18 },
		];
		comparisonArray = [
			{ name: 'Micahel', age: null },
			{ name: 'Bailey', age: 1 },
			{ name: 'Susan', age: 16 },
			{ name: 'Max', age: 16 },
			{ name: 'Bailey', age: 18 },
			{ name: 'Max', age: 18 },
			{ name: 'Max', age: 63 },
			{ name: 'Susan', age: 73 },
			{ name: 'Susan', age: 91 },
		];
		expect(quickSortStable(preSortedArr, (el) => el.age)).toEqual(
			comparisonArray
		);
	});

	it('Should preserve order of ungrouped identical elements,', () => {
		let preSortedArr = [
			{ value: 3, order: 0 },
			{ value: 1, order: 0 },
			{ value: 2, order: 0 },
			{ value: 4, order: 0 },
			{ value: 3, order: 1 },
			{ value: 4, order: 1 },
			{ value: 1, order: 1 },
			{ value: 4, order: 2 },
			{ value: 4, order: 3 },
			{ value: 2, order: 1 },
			{ value: 4, order: 4 },
			{ value: 0, order: 0 },
			{ value: 0, order: 1 },
			{ value: 1, order: 2 },
			{ value: 2, order: 2 },
			{ value: 3, order: 2 },
		];
		let comparisonArray = [
			{ value: 0, order: 0 },
			{ value: 0, order: 1 },
			{ value: 1, order: 0 },
			{ value: 1, order: 1 },
			{ value: 1, order: 2 },
			{ value: 2, order: 0 },
			{ value: 2, order: 1 },
			{ value: 2, order: 2 },
			{ value: 3, order: 0 },
			{ value: 3, order: 1 },
			{ value: 3, order: 2 },
			{ value: 4, order: 0 },
			{ value: 4, order: 1 },
			{ value: 4, order: 2 },
			{ value: 4, order: 3 },
			{ value: 4, order: 4 },
		];
		expect(quickSortStable(preSortedArr, (el) => el.value)).toEqual(
			comparisonArray
		);
	});

	it('Should properly sort on edge cases,', () => {
		let arr = [];
		expect(quickSortStable(arr)).toEqual([]);

		arr = [1];
		expect(quickSortStable(arr)).toEqual([1]);

		arr = [0, 0, 0, 0, 0, 0];
		expect(quickSortStable(arr)).toEqual([0, 0, 0, 0, 0, 0]);

		arr = [null, undefined, null, undefined];
		expect(quickSortStable(arr)).toEqual(arr);
	});
});
