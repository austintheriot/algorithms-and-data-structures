import union from './unionOfTwoArrays';

describe('Union of Two Arrays', () => {
	it('Should return the union of two unsorted arrays (without duplicates)', () => {
		expect(union([1, 2, 3, 4], [2, 3, 4, 5]).sort((a, b) => a - b)).toEqual([
			1,
			2,
			3,
			4,
			5
		]);
		expect(
			union([1, 1, 8, 5, 5, 5, 0, 1, 1, 5], [3, 4, 5, 3, 3, 4, 4]).sort(
				(a, b) => a - b
			)
		).toEqual([0, 1, 3, 4, 5, 8]);
		expect(
			union(
				[-15.2, -3, -15.2, -3, 0, 5, 7.5, 0, 5, 7.5, 8, 9],
				[-37.9, -15.2, 0, 8, 11, 15, -37.9, 8, 11, 15, -37.9, -15.2]
			).sort((a, b) => a - b)
		).toEqual([-37.9, -15.2, -3, 0, 5, 7.5, 8, 9, 11, 15]);
	});

	it('Should work on edge cases', () => {
		expect(union([], [])).toEqual([]);
		expect(union([1], [0]).sort((a, b) => a - b)).toEqual([0, 1]);
		expect(union([0], [1]).sort((a, b) => a - b)).toEqual([0, 1]);
		expect(union([1], [1])).toEqual([1]);
	});
});
