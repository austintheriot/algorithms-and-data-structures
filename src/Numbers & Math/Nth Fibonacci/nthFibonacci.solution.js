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

/* 

  Naive iterative solution. Compute each new fibonacci number 
  based on the previous 2 in an array.

  Runtime = O(n)
  Space = roughly O(log(n)) -- requires an array of all of the fibonacci numbers up to n
    This is more accurately O(logφ((n * 5 ^ 0.5)) + 2)

*/

function iterativeFibonacci1(number) {
	const array = [0, 1];
	for (let i = array.length - 1; i < number; i++) {
		array.push(array[array.length - 1] + array[array.length - 2]);
	}
	return array[number];
}

/* 

  Optimized iterative solution. Only requries previous 2 numbers.
  The fastest algorithm with the least space complexity.

  Continually reassign a and b to get the final answer.
  0 + 1 = 1
      1 + 1 = 2
          1 + 2 = 3
              2 + 3 = 5
                  3 + 5 = 8
                      etc.

  Runtime = O(n)
  Space = O(1)

*/

export default function iterativeFibonacci2(number) {
	let a = 0;
	let b = 1;

	for (let i = 0; i < number; i++) {
		const temp = a;
		a = b;
		b += temp;
	}

	return a;
}

/* 

  Optimized iterative solution in Gayle McDowell's style

  Continually reassign a and b to get the final answer.
  0 + 1 = 1
      1 + 1 = 2
          1 + 2 = 3
              2 + 3 = 5
                  3 + 5 = 8
                      etc.

  Runtime = O(n)
  Space = O(1)

*/

function iterativeFibonacci3(n) {
	if (n === 0) return 0;
	let a = 0;
	let b = 1;

	for (let i = 2; i < n; i++) {
		const c = a + b;
		a = b;
		b = c;
	}

	return a + b;
}

/* 

  Recursive solution that mimics the iterative solution in which a and b 
  are continually reassigned to get the final result.

  0 + 1 = 1
      1 + 1 = 2
          1 + 2 = 3
              2 + 3 = 5
                  3 + 5 = 8
                      etc.

  Runtime = O(n)
  Space = roughly O(n) --requires a call stack up to size n. 

*/

function recursiveFibonacci1(n, a = 0, b = 1) {
	return n === 0 ? a : recursiveFibonacci1(n - 1, b, a + b);
}

/* 

  Naive recursive solution. 
  Runtime = roughly O(2 ^ n)
    The runtime is more specifically O(1.6 ^ n), since the right branch is
    is always smaller than the left branch.
    On my machine, this took 193 seconds to test up to n = 50!
   Space = roughly O(n) --requires a call stack up to size n.

*/

function recursiveFibonacci2(n) {
	if (n === 0 || n === 1) return n;
	return recursiveFibonacci2(n - 1) + recursiveFibonacci2(n - 2);
}

/* 

  Memoized recursive solution. 
  Runtime = O(n)
  Space = roughly O(n + log(n)) 
    Requires a call stack up to size n and an array containing all of the 
    fibonacci numbers up to index n (= roughly log(n))

*/

function recursiveFibonacci3(n, memo = { 0: 0, 1: 1 }) {
	return (
		memo[n] ??
		(memo[n] =
			recursiveFibonacci3(n - 1, memo) + recursiveFibonacci3(n - 2, memo))
	);
}
