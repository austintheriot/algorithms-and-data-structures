import getDigit from './getDigit';

describe('Get Digit', () => {
	it('Should return the digit at the indicated decimal index', () => {
		expect(getDigit(4321, 0)).toBe(1);
		expect(getDigit(4321, 1)).toBe(2);
		expect(getDigit(4321, 2)).toBe(3);
		expect(getDigit(4321, 3)).toBe(4);
	});

	it('Should work with negative numbers', () => {
		expect(getDigit(-4321, 0)).toBe(-1);
		expect(getDigit(-4321, 1)).toBe(-2);
		expect(getDigit(-4321, 2)).toBe(-3);
		expect(getDigit(-4321, 3)).toBe(-4);
	});

	it('Should return 0 for indices out of range', () => {
		expect(getDigit(4321, 4)).toBe(0);
		expect(getDigit(4321, -1)).toBe(0);
		expect(getDigit(-4321, 100)).toBe(0);
		expect(getDigit(-4321, -100)).toBe(0);
	});
});
