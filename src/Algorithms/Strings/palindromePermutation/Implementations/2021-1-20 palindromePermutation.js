/* 

  Implement a function to determine whether a string is 
  a permutation of a palindrome. Ignore capitalization
  and all non-letter characters.

  Optimize using bitwise operations.

*/

export default function palindromePermutation(string) {
	string = string.replace(/[^A-Za-z]/g, '').toLowerCase();
	const flipBit = (num, i) => num ^ (1 << i);
	const ASCII_OFFSET = 97;
	const num = 0;

	for (let i = 0; i < string.length; i++) {
		num = flipBit(num, string.charCodeAt(i) - ASCII_OFFSET);
	}

	return (num & (num - 1)) === 0 ? true : false;
}
