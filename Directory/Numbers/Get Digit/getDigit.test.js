const getDigit = require('./getDigit.js');

it('Should return the digit at the indicated index', () => {
	expect(getDigit(4321, 0)).toBe(1);
	expect(getDigit(4321, 1)).toBe(2);
	expect(getDigit(4321, 2)).toBe(3);
	expect(getDigit(4321, 3)).toBe(4);
});

it('Should work with negative numbers', () => {
	expect(getDigit(-4321, 0)).toBe(1);
	expect(getDigit(-4321, 1)).toBe(2);
	expect(getDigit(-4321, 2)).toBe(3);
	expect(getDigit(-4321, 3)).toBe(4);
});
