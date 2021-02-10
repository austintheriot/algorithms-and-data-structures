/* 

  Implement an algorithm to determine the number of possible ways a person 
  can run up a staircase of length n, taking steps of size 1, 2, or 3.

*/

export default function tripleStep(n, memo = {}) {
  return n < 0 ? 0 : n === 0 ? 1
    : memo[n] ?? (memo[n] = tripleStep(n - 1, memo)
      + tripleStep(n - 2, memo) + tripleStep(n - 3, memo));
}
