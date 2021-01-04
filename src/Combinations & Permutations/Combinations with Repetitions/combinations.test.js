import combinations from './combinations';
import { ERROR_TOO_LARGE } from './combinations';
import * as answers from './combinations.test.answers';

describe('Every Possible String Combination', () => {
	it('Should produce every possible string combination', () => {
		//Numbers
		//Length 2
		const testZeroThroughNine2 = combinations('0123456789', 2);
		expect(testZeroThroughNine2).toEqual(answers.zeroThroughNine2);

		//Length 3
		const testZeroThroughNine3 = combinations('0123456789', 3);
		expect(testZeroThroughNine3).toEqual(answers.zeroThroughNine3);

		//Alphabet
		//Length 2
		const testAThroughZ2 = combinations('abcdefghijklmnopqrstuvwxyz', 2);
		expect(testAThroughZ2).toEqual(answers.aThroughZ2);

		//Length 4
		const testAThroughZ4 = combinations('abcdefghijklmnopqrstuvwxyz', 4);
		expect(testAThroughZ4.length).toBe(456976);
	});

	it('Should immediately throw on arrays too large', () => {
		expect(() => combinations('abcdefghijklmnopqrstuvwxyz', 100)).toThrow(
			ERROR_TOO_LARGE
		);
	});
});
