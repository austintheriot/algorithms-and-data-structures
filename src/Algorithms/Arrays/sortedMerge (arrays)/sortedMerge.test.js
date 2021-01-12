import sortedMerge from './sortedMerge';

describe('Sorted Merge', () => {
	it('Should merge arrayB into arrayA in sorted order', () => {
		let arrayA = [0, 2, 5, 8, 9, null, null, null, null];
		let arrayB = [1, 3, 7, 11];
		let result = [0, 1, 2, 3, 5, 7, 8, 9, 11];
		expect(sortedMerge(arrayA, arrayB)).toEqual(result);

		arrayA = [-11.2, -8, 0.5, 9, 157.3, null, null, null, null, null];
		arrayB = [-256, -115.123, -11.2, 140, 200];
		result = [-256, -115.123, -11.2, -11.2, -8, 0.5, 9, 140, 157.3, 200];
		expect(sortedMerge(arrayA, arrayB)).toEqual(result);
	});

	it('Should modify array A directly', () => {
		const arrayA = [0, 2, 5, 8, 9, null, null, null, null];
		const arrayB = [1, 3, 7, 11];
		const result = [0, 1, 2, 3, 5, 7, 8, 9, 11];
		expect(sortedMerge(arrayA, arrayB)).toBe(arrayA);
		expect(arrayA).toEqual(result);
	});
});
