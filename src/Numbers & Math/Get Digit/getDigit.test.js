import getDecimal from './getDigit';

it('Should return the digit at the indicated decimal index', () => {
	expect(getDecimal(4321, 0)).toBe(1);
	expect(getDecimal(4321, 1)).toBe(2);
	expect(getDecimal(4321, 2)).toBe(3);
	expect(getDecimal(4321, 3)).toBe(4);
});

it('Should work with negative numbers', () => {
	expect(getDecimal(-4321, 0)).toBe(-1);
	expect(getDecimal(-4321, 1)).toBe(-2);
	expect(getDecimal(-4321, 2)).toBe(-3);
	expect(getDecimal(-4321, 3)).toBe(-4);
});

it('Should return 0 for indices out of range', () => {
	expect(getDecimal(4321, 4)).toBe(0);
	expect(getDecimal(4321, -1)).toBe(0);
	expect(getDecimal(-4321, 100)).toBe(0);
	expect(getDecimal(-4321, -100)).toBe(0);
});
