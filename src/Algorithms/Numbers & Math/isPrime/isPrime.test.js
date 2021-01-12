import isPrime from './isPrime';

it('Should return true when a number is prime', () => {
	expect(isPrime(-10)).toBe(false);
	expect(isPrime(0)).toBe(false);
	expect(isPrime(1)).toBe(false);
	expect(isPrime(2)).toBe(true);
	expect(isPrime(100)).toBe(false);
	expect(isPrime(999983)).toBe(true);
	expect(isPrime(999984)).toBe(false);
});
