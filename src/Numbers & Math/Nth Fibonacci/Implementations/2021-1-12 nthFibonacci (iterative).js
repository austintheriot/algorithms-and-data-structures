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

export default function fibonacci(n) {
	let a = 0,
		b = 1,
		c;

	for (let i = 0; i < n; i++) {
		(c = a + b), (a = b), (b = c);
	}

	return a;
}
