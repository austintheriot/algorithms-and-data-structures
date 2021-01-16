/*  

  Implement an algorithm to determine whether one string 
  is a permutation of a second string.

*/

export default function checkPermutation(s1, s2) {
	const hashTable = {};

	for (let i = 0; i < s1.length; i++) {
		const ch = s1[i];
		if (!hashTable[ch]) hashTable[ch] = 0;
		hashTable[ch]++;
	}

	for (let i = 0; i < s2.length; i++) {
		const ch = s2[i];
		if (!hashTable[ch]) return false;
		else hashTable[ch]--;
	}

	return true;
}
