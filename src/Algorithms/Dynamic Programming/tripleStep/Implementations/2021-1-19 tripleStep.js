/* 

  Implement an algorithm to determine the number of possible ways a person 
  can run up a staircase of length n, taking steps of size 1, 2, or 3.

*/

//memoized
function tripleStep1(n, hashTable = {}) {
  return n < 0
    ? 0
    : n === 0
    ? 1
    : hashTable[n] ??
      (hashTable[n] =
        tripleStep1(n - 1) + tripleStep1(n - 2) + tripleStep1(n - 3));
}

//iterative
function tripleStep2(n, a = 1, b = 1, c = 2) {
  while (n > 0) {
    const d = a + b + c;
    a = b;
    b = c;
    c = d;
    n--;
  }
  return a;
}

//optimized recursive
export default function tripleStep3(n, a = 1, b = 1, c = 2) {
  return n === 0 ? a : tripleStep3(n - 1, b, c, a + b + c);
}
