//implemented with a hash table:
let hasAllUniqueCharacters = (string) => {
	const hashTable = {};
	for (let ch of string) {
		if (hashTable[ch]) {
			return false;
		} else {
			hashTable[ch] = true;
		}
	}
	return true;
};

it('If string has all unique characters', () => {
	expect(hasAllUniqueCharacters('abcdef')).toBe(true);
	expect(hasAllUniqueCharacters('a')).toBe(true);
	expect(hasAllUniqueCharacters('22')).toBe(false);
	expect(hasAllUniqueCharacters('ZZZ')).toBe(false);
});

//implemented without a hash table:
hasAllUniqueCharacters = (string) => {
	if (string.length === 0) return true;
	const array = string.split('').sort((a, b) => a - b);
	for (let i = 1; i < array.length; i++) {
		if (array[i] === array[i - 1]) {
			return false;
		}
	}
	return true;
};
