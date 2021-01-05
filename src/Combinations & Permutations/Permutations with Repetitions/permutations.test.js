import permutations from './permutations';
import { ERROR_TOO_LARGE } from './permutations';
import * as answers from './permutations.test.answers';

describe('Permutations with Repetitions', () => {
	it('Should produce every possible string combination', () => {
		//Numbers
		//Length 2
		const testZeroThroughNine2 = permutations('0123456789', 2);
		expect(testZeroThroughNine2).toEqual(answers.zeroThroughNine2);

		//Length 3
		const testZeroThroughNine3 = permutations('0123456789', 3);
		expect(testZeroThroughNine3).toEqual(answers.zeroThroughNine3);

		//Alphabet
		//Length 2
		const testAThroughZ2 = permutations('abcdefghijklmnopqrstuvwxyz', 2);
		expect(testAThroughZ2).toEqual(answers.aThroughZ2);

		//Length 4
		const testAThroughZ4 = permutations('abcdefghijklmnopqrstuvwxyz', 4);
		expect(testAThroughZ4.length).toBe(456976);
	});

	it('Should immediately throw on arrays too large', () => {
		expect(() => permutations('abcdefghijklmnopqrstuvwxyz', 100)).toThrow(
			ERROR_TOO_LARGE
		);
	});
});
