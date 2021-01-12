/* 

  Implement an algorithm to determine the number of possible ways a person 
  can run up a staircase of length n, taking steps of size 1, 2, or 3.

  Naive Solution:
   Runtime: O(3 ^ n)
   Space: O(n)
  
  Dynamic Programming Solution:
   Runtime: O(n)
   Space: O(n)

  Optimized Iterative Solution:
    Runtime: O(n)
    Space: O(1)


    The optimized iterative solution in the end just becomes the Tribonacci sequence.
    Take Fibonacci sequence, but add 3 at a time instead of 2 at a time.
    0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274 ... 
    Which means that it can can be calculated in O(1) time and space using a closed-form expression.

*/

//Naive Recursive Solution
export default function tripleStep1(n) {
	//base case
	return n < 0
		? 0
		: n === 0
		? 1
		: //recursively calculate hashtable value
		  tripleStep1(n - 1) + tripleStep1(n - 2) + tripleStep1(n - 3);
}

//Dynamic Programming Solution
function tripleStep2(n, hashTable = {}) {
	//base case
	if (n < 0) return 0;
	else if (n === 0) return 1;
	//use hashTable value if available
	else {
		return (
			hashTable[n] ??
			(hashTable[n] =
				tripleStep2(n - 1, hashTable) +
				tripleStep2(n - 2, hashTable) +
				tripleStep2(n - 3, hashTable))
		);
	}
}

//Optimized Iterative Solution
function tripleStep3(n) {
	const a = 1;
	const b = 1;
	const c = 2;

	for (let i = n; i > 0; i--) {
		const d = a + b + c;
		a = b;
		b = c;
		c = d;
	}

	return a;
}
