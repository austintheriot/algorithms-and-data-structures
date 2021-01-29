/*  

  Implement an algorithm to determine whether one string 
  is a permutation of a second string.

  Capitalization counts, but non-letter characters do not.

*/

export default function checkPermutation(s1, s2) {
  const hashTable = {};

  s1 = s1.replace(/[^A-Za-z]/g, '');
  s2 = s2.replace(/[^A-Za-z]/g, '');

  for (let i = 0; i < s1.length; i++){
    if (!hashTable[s1[i]]) hashTable[s1[i]] = 0;
    hashTable[s1[i]]++;
  }

  for (let i = 0; i < s2.length; i++){
    if (!hashTable[s2[i]] || (hashTable[s2[i]] - 1) < 0) return false;
    hashTable[s2[i]]--
  }

  return true;
}
