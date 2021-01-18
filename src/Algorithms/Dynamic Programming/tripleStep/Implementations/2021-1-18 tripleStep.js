/* 

  Implement an algorithm to determine the number of possible ways a person 
  can run up a staircase of length n, taking steps of size 1, 2, or 3.

*/

//memoized recursive function
function tripleStep1(n, hashTable = {}) {
	if (n < 0) return 0;
	else if (n === 0) return 1;
	else
		return (
			hashTable[n] ??
			(hashTable[n] =
				tripleStep(n - 1, hashTable) +
				tripleStep(n - 2, hashTable) +
				tripleStep(n - 3, hashTable))
		);
}

//iterative recursive function
export default function tripleStep2(n) {
	let a = 1;
	let b = 1;
	let c = 2;
	while (n > 0) {
		let d = a + b + c;
		a = b;
		b = c;
		c = d;
		n--;
	}

	return a;
}

//optimized recurisve function
export default function tripleStep3(n, a = 1, b = 1, c = 2) {
	return n === 0 ? a : tripleStep3(n - 1, b, c, a + b + c);
}
