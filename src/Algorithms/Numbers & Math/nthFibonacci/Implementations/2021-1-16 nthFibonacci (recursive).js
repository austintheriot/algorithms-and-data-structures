/* 

  Generate the nth Fibonacci, using 0-based counting.

  For example: 
  nthFibonacci(0) = 0
  nthFibonacci(1) = 1
  nthFibonacci(2) = 1
  nthFibonacci(3) = 2
  nthFibonacci(4) = 3
  nthFibonacci(5) = 5

*/

export default function fibonacci(n, hashTable = {}) {
	return n === 0 || n === 1
		? n
		: hashTable[n] ??
				(hashTable[n] =
					fibonacci(n - 1, hashTable) + fibonacci(n - 2, hashTable));
}