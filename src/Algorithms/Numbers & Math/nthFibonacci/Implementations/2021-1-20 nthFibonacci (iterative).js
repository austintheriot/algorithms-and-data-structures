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
	let a = 0;
	let b = 1;
	let c = a + b;
	while (n > 0) {
		c = a + b;
		a = b;
		b = c;
		n--;
	}

	return a;
}
