/*  

  Implement an algorithm to determine whether one string is a permutation of a second string.

*/

export default function checkPermutation(string1, string2) {
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
}
