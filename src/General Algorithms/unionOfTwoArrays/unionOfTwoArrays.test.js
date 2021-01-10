import union from './unionOfTwoArrays';

describe('Union of Two Arrays', () => {
	it('Should return the union of two arrays (without duplicates & sorted)', () => {
		expect(union([1, 2, 3, 4], [2, 3, 4, 5]).sort((a, b) => a - b)).toEqual([
			2,
			3,
			4,
		]);
		expect(union([0, 1, 5, 5, 8], [3, 4, 5]).sort((a, b) => a - b)).toEqual([
			5,
		]);
		expect(
			union([-15.2, -3, 0, 5, 7.5, 8, 9], [-37.9, -15.2, 0, 8, 11, 15]).sort(
				(a, b) => a - b
			)
		).toEqual([-15.2, 0, 8]);
	});

	it('Should eliminate duplicates from both arrays', () => {
		expect(
			union([1, 2, 2, 2, 3, 4], [2, 3, 3, 3, 3, 4, 5, 5, 5, 5]).sort(
				(a, b) => a - b
			)
		).toEqual([2, 3, 4]);
		expect(
			union(
				[0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 8],
				[3, 4, 5, 5, 5, 5, 5]
			).sort((a, b) => a - b)
		).toEqual([5]);
		expect(
			union(
				[-15.2, -15.2, -15.2, -3, -3, 0, 0, 5, 5, 7.5, 7.5, 8, 8, 9, 9],
				[-37.9, -37.9, -15.2, -15.2, 0, 0, 8, 8, 11, 11, 15, 15]
			).sort((a, b) => a - b)
		).toEqual([-15.2, 0, 8]);
	});

	it('Should work with unsorted arrays', () => {
		expect(
			union([2, 2, 3, 1, 2, 4], [5, 5, 5, 2, 3, 4, 5, 3, 3, 3]).sort(
				(a, b) => a - b
			)
		).toEqual([2, 3, 4]);
		expect(
			union(
				[5, 5, 5, 5, 8, 0, 0, 1, 5, 0, 5, 5, 5],
				[3, 4, 5, 5, 5, 5, 5]
			).sort((a, b) => a - b)
		).toEqual([5]);
		expect(
			union(
				[-15.2, -15.2, -3, -3, 0, 7.5, 8, 8, -15.2, 0, 5, 5, 7.5, 9, 9],
				[0, 8, -37.9, 8, -37.9, 11, -15.2, 11, -15.2, 0, 15, 15]
			).sort((a, b) => a - b)
		).toEqual([-15.2, 0, 8]);
	});

	it('Should work on edge cases', () => {
		expect(union([], [])).toEqual([]);
		expect(union([1], [0])).toEqual([]);
		expect(union([0], [1])).toEqual([]);
		expect(union([1], [1])).toEqual([1]);
	});
});
