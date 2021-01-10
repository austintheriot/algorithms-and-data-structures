import checkPermutation from './checkPermutation';

it('Should check if 2 strings are permutations of each other', () => {
	expect(checkPermutation('abcd', 'dcba')).toBe(true);
	expect(checkPermutation('AAA', 'AAz')).toBe(false);
	expect(checkPermutation('a1b2', '2ba1')).toBe(true);
	expect(checkPermutation('sdfnskldfn', 'sdfskdfmnsdfnnn')).toBe(false);
});
