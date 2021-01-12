import permuations from './permutationsWithoutRepetitions';
import * as answers from './permutationsWithoutRepetitions.test.answers';

it('Should produce every possible permutation of a string (with no duplicates)', () => {
	const tests = {
		a: permuations(['a']),
		ab: permuations(['a', 'b']),
		abc: permuations(['a', 'b', 'c']),
		abcd: permuations(['a', 'b', 'c', 'd']),
		abcde: permuations(['a', 'b', 'c', 'd', 'e']),
		abcdef: permuations(['a', 'b', 'c', 'd', 'e', 'f']),
		abcdefg: permuations(['a', 'b', 'c', 'd', 'e', 'f', 'g']),
	};

	expect(tests.a).toEqual(answers.a);
	expect(tests.ab.sort()).toEqual(answers.ab.sort());
	expect(tests.abc.sort()).toEqual(answers.abc.sort());
	expect(tests.abcd.sort()).toEqual(answers.abcd.sort());
	expect(tests.abcdefg.sort()).toEqual(answers.abcdefg.sort());
});
