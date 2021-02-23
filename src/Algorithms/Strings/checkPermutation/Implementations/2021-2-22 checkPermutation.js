/*  

  Implement an algorithm to determine whether one string 
  is a permutation of a second string.

  Capitalization counts, but non-letter characters do not.

*/

export default function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) return false;

  s1 = s1.replace(/[^A-Za-z]/g, '');
  s2 = s2.replace(/[^A-Za-z]/g, '');
  const ht = {};
  
  for (let i = 0; i < s1.length; i++){
    ht[s1[i]] ??= 0;
    ht[s1[i]]++;
  }

  for (let i = 0; i < s2.length; i++){
    if (!ht[s2[i]]) return false
    else ht[s2[i]]--;
  }


  return true;
}
