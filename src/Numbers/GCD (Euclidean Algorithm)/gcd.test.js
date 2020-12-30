import gcd from './gcd';

it('Should return the greatest common denominator of two numbers', () => {
	expect(gcd(1, 1)).toBe(1);
	expect(gcd(10, 12)).toBe(2);
	expect(gcd(100, 80)).toBe(20);
	expect(gcd(123456789, 987654321)).toBe(9);
	expect(gcd(-10101010, 90909090)).toBe(-10101010);
});
