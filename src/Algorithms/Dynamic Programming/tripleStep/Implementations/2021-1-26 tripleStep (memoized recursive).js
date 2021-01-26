/* 

  Implement an algorithm to determine the number of possible ways a person 
  can run up a staircase of length n, taking steps of size 1, 2, or 3.

*/

export default function tripleStep(n, hashTable = {}) {
  return n < 0
    ? 0
    : n === 0
    ? 1
    : hashTable[n] ??
      (hashTable[n] =
        tripleStep(n - 1, hashTable) +
        tripleStep(n - 2, hashTable) +
        tripleStep(n - 3, hashTable));
}
