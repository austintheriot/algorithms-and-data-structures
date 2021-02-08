/*

  Implement an algorithm that returns the union
  of two arrays (eliminating duplicates in the process).
  The arrays are not necessarily sorted.

*/

export default function unionOfTwoArrays(r1, r2) {
  const hashtable = {};
  const union = [];

  for (let i = 0; i < r1.length; i++){
    if (!hashtable[r1[i]]) {
      hashtable[r1[i]] = true;
      union.push(r1[i]);
    }
  }

  for (let i = 0; i < r2.length; i++){
    if (!hashtable[r2[i]]) {
      hashtable[r2[i]] = true;
      union.push(r2[i]);
    }
  }

  return union;
}
