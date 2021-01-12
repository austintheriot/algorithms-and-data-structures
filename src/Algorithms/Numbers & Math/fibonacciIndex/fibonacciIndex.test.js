import fibonacciIndex from './fibonacciIndex';

it('Should return the index of the number in the Fibonacci sequence', () => {
	expect(fibonacciIndex(0)).toBe(0);
	expect(fibonacciIndex(1)).toBe(1);
	expect(fibonacciIndex(2)).toBe(3);
	expect(fibonacciIndex(3)).toBe(4);
	expect(fibonacciIndex(5)).toBe(5);
	expect(fibonacciIndex(8)).toBe(6);
	expect(fibonacciIndex(13)).toBe(7);
	expect(fibonacciIndex(21)).toBe(8);
	expect(fibonacciIndex(34)).toBe(9);
	expect(fibonacciIndex(55)).toBe(10);
	expect(fibonacciIndex(610)).toBe(15);
	expect(fibonacciIndex(6765)).toBe(20);
	expect(fibonacciIndex(75025)).toBe(25);
	expect(fibonacciIndex(832040)).toBe(30);
});
