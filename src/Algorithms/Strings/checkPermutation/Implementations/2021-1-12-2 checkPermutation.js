/*  

  Implement an algorithm to determine whether one string 
  is a permutation of a second string.

*/

export default function checkPermutation(s1, s2) {
	if (s1.length !== s2.length) return false;
	let isPermutation = true;
	s1 = s1.split('');
	s2 = s2.split('');

	const hashTable = {};

	s1.forEach((ch) => {
		hashTable[ch] = hashTable[ch] ?? 0;
		hashTable[ch]++;
	});

	s2.forEach((ch) => {
		if (!hashTable[ch]) isPermutation = false;
		hashTable[ch]--;
	});

	return isPermutation;
}
