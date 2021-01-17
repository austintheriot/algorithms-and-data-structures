/* 

  Determine whether a given string contains only a single occurence of each letter.

  You can choose to implement with or without a secondary data structure.

*/

export default function isUnique(string) {
	const hashTable = {};
	for (let ch of string) {
		if (hashTable[ch]) return false;
		else hashTable[ch] = true;
	}
	return true;
}
