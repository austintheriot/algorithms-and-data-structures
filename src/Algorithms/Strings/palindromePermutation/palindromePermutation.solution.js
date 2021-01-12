/* 

  Implement a function to determine whether a string is 
  a permutation of a palindrome. Ignore capitalization
  and all non-letter characters.

  Optimize using bitwise operations.

  Runtime: O(n)
  Space: O(1) (for the optimized version), else O(n)

*/

//Solution using a hashtable
function palindromePermutation1(string) {
	string = string
		.split(/[^a-zA-z]/)
		.map((ch) => ch.toLowerCase())
		.join('');

	const hashTable = {};

	for (let ch of string) {
		hashTable[ch] = hashTable[ch] ?? 0;
		hashTable[ch]++;
	}

	let oddOccurenceFound = false;
	for (let ch in hashTable) {
		if (hashTable[ch] % 2 !== 0 && oddOccurenceFound) {
			return false;
		} else if (hashTable[ch] % 2 !== 0 && !oddOccurenceFound) {
			oddOccurenceFound = true;
		}
	}

	return true;
}

//optimized using bitwise operations
export default function palindromePermutation2(string) {
	const ASCII_OFFSET = 97;
	const toggleBit = (num, i) => num ^ (1 << i);
	let characterSwitch = 0;

	string = string
		.split(/[^a-zA-z]/)
		.map((ch) => ch.toLowerCase())
		.join('');

	for (let i = 0; i < string.length; i++) {
		characterSwitch = toggleBit(
			characterSwitch,
			string.charCodeAt(i) - ASCII_OFFSET
		);
	}

	return ((characterSwitch - 1) & characterSwitch) === 0;
}
