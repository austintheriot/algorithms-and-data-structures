/* 

  Implement a function to determine whether a string is 
  a permutation of a palindrome. Ignore capitalization
  and all non-letter characters.

  Optimize using bitwise operations.

*/

export default function palindromePermutation(string) {
  string = string.toLowerCase().replace(/[^a-z]/g, '');
  const ASCII_OFFSET = 97;
  const flipBit = (num, i) => num ^ (1 << i);
  let num = 0;

  for (let i = 0; i < string.length; i++){
    num = flipBit(num, string.charCodeAt(i) - ASCII_OFFSET);
  }

  return ((num - 1) & num) === 0 ? true : false;
}
