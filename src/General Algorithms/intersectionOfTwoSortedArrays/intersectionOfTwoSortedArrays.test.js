import intersection from './intersectionOfTwoSortedArrays';

it('Should return an array that is the intersection of 2 sorted arrays', () => {
	let first = [0, 1, 1, 3, 5, 7, 7, 8];
	let second = [7, 8];
	expect(intersection(first, second)).toEqual([7, 8]);

	first = [7, 8];
	second = [0, 1, 1, 3, 5, 7, 7, 8];
	expect(intersection(first, second)).toEqual([7, 8]);

	first = [5, 6, 7];
	second = [1, 2, 3];
	expect(intersection(first, second)).toEqual([]);

	first = [1, 1, 1, 1, 1, 2];
	second = [1, 1, 1, 1, 2];
	expect(intersection(first, second)).toEqual([1, 1, 1, 1, 2]);

	first = [9];
	second = [3, 7, 9];
	expect(intersection(first, second)).toEqual([9]);

	first = [1, 5, 8, 8];
	second = [8];
	expect(intersection(first, second)).toEqual([8]);
});
