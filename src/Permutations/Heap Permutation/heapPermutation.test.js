import permute from './heapPermutation';

const ANSWER_LENGTH_4 = [
	[1, 2, 3, 4],
	[2, 1, 3, 4],
	[3, 1, 2, 4],
	[1, 3, 2, 4],
	[2, 3, 1, 4],
	[3, 2, 1, 4],
	[4, 2, 3, 1],
	[2, 4, 3, 1],
	[3, 4, 2, 1],
	[4, 3, 2, 1],
	[2, 3, 4, 1],
	[3, 2, 4, 1],
	[4, 1, 3, 2],
	[1, 4, 3, 2],
	[3, 4, 1, 2],
	[4, 3, 1, 2],
	[1, 3, 4, 2],
	[3, 1, 4, 2],
	[4, 1, 2, 3],
	[1, 4, 2, 3],
	[2, 4, 1, 3],
	[4, 2, 1, 3],
	[1, 2, 4, 3],
	[2, 1, 4, 3],
];

describe('Heaps Permutation Algorithm', () => {
	const array = [1, 2, 3, 4];
	const answer = permute(array);

	it('Should produce every possible permutation of array elements (out of order)', () => {
		expect(ANSWER_LENGTH_4.map((el) => el.join('')).sort()).toEqual(
			answer.map((el) => el.join('')).sort()
		);
	});

	it('Should produce every possible permutation of array elements (in order)', () => {
		expect(ANSWER_LENGTH_4).toEqual(answer);
	});

	it('Should modify original array', () => {
		expect(array).not.toEqual([1, 2, 3, 4]);
	});
});
