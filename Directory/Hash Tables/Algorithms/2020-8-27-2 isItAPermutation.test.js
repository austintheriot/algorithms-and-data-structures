//increment with one string and then decrement with the other

const istItAPermutation = (string1, string2) => {
	if (string1.length !== string2.length) return false;

	const hashTable = {};

	for (let i = 0; i < string1.length; i++) {
		const ch = string1[i];
		if (!hashTable[ch]) hashTable[ch] = 0;
		hashTable[ch]++;
	}

	for (let i = 0; i < string2.length; i++) {
		const ch = string2[i];
		if (!hashTable[ch]) return false; //if character not defined
		hashTable[ch]--;
		if (hashTable[ch] < 0) return false; //if character count less than 0;
	}
	return true;
};

test('Should check if 2 strings are permutations of each other', () => {
	expect(istItAPermutation('abcd', 'dcba')).toBe(true);
	expect(istItAPermutation('AAA', 'AAz')).toBe(false);
	expect(istItAPermutation('a1b2', '2ba1')).toBe(true);
	expect(istItAPermutation('sdfnskldfn', 'sdfskdfmnsdfnnn')).toBe(false);
});
