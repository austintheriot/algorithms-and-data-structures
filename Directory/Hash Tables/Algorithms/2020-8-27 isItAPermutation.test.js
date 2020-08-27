//tracking both array simultaneously

const istItAPermutation = (string1, string2) => {
	if (string1.length !== string2.length) return false;
	const hashTable = {
		string1: {},
		string2: {},
	};
	for (let i = 0; i < string1.length; i++) {
		if (!hashTable.string1[string1[i]]) hashTable.string1[string1[i]] = 0;
		if (!hashTable.string2[string2[i]]) hashTable.string2[string2[i]] = 0;
		hashTable.string1[string1[i]]++;
		hashTable.string2[string2[i]]++;
	}
	console.log('hashTable: ', hashTable);
	for (let ch in hashTable.string1) {
		if (hashTable.string1[ch] !== hashTable.string2[ch]) return false;
	}

	return true;
};

test('Should check if 2 strings are permutations of each other', () => {
	expect(istItAPermutation('abcd', 'dcba')).toBe(true);
	expect(istItAPermutation('AAA', 'AAz')).toBe(false);
	expect(istItAPermutation('a1b2', '2ba1')).toBe(true);
	expect(istItAPermutation('sdfnskldfn', 'sdfskdfmnsdfnnn')).toBe(false);
});
