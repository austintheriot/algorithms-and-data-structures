import palindromePermutation from './palindromePermutation';

describe('Palindrome Permutation Checker', () => {
	it('Should return true if a string is a permutation of a palindrome, else false', () => {
		expect(palindromePermutation('abcdefedcba')).toBe(true);
		expect(palindromePermutation('Ab, cdeedcba...')).toBe(true);
		expect(palindromePermutation('Dc baab cde e!')).toBe(true);
		expect(palindromePermutation('Ced, efcdba... a?')).toBe(false);
		expect(palindromePermutation('c baa eef cd')).toBe(false);
		expect(palindromePermutation('(abdedcba)')).toBe(false);
	});
});
