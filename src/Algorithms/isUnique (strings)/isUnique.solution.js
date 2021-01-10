/* 

  Determine with a given string contains only a single occurence of each letter.

*/

//implemented with a hash table:
export default function isUnique1(string) {
	const hashTable = {};
	for (let ch of string) {
		if (hashTable[ch]) {
			return false;
		} else {
			hashTable[ch] = true;
		}
	}
	return true;
}

//implemented without a hash table:
function isUnique2(string) {
	if (string.length === 0) return true;
	const array = string.split('').sort((a, b) => a - b);
	for (let i = 1; i < array.length; i++) {
		if (array[i] === array[i - 1]) {
			return false;
		}
	}
	return true;
}

//could also implement in O(n^2) time by checking every element against every other element.
