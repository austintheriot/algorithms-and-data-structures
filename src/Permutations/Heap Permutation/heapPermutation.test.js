import permute from './heapPermutation';

const ANSWER_LENGTH_4 = [
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
	[4, 1, 2, 3],
];

it('Should produce every possible permutation of array elements', () => {
	const answer = permute([1, 2, 3, 4]);
	expect(ANSWER_LENGTH_4.map((el) => el.join('')).sort()).toEqual(
		answer.map((el) => el.join('')).sort()
	);
});
