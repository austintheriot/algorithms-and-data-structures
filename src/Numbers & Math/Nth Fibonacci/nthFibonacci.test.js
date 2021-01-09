import nthFibonacci from './nthFibonacci';

it('Should return the nth number in the Fibonacci sequence (0-based counting)', () => {
	expect(nthFibonacci(0)).toBe(0);
	expect(nthFibonacci(1)).toEqual(1);
	expect(nthFibonacci(2)).toEqual(1);
	expect(nthFibonacci(3)).toEqual(2);
	expect(nthFibonacci(4)).toEqual(3);
	expect(nthFibonacci(5)).toEqual(5);
	expect(nthFibonacci(10)).toEqual(55);
	expect(nthFibonacci(50)).toEqual(12586269025);
});
