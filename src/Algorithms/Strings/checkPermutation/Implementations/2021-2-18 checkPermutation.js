/*  

  Implement an algorithm to determine whether one string 
  is a permutation of a second string.

  Capitalization counts, but non-letter characters do not.

*/

export default function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) return false;
  s1 = s1.replace(/[^A-Za-z]/g, '').split('').sort();
  s2 = s2.replace(/[^A-Za-z]/g, '').split('').sort();
  for (let i = 0; i < s1.length; i++){
    if (s1[i] !== s2[i]) return false;
  }
  return true;
}
