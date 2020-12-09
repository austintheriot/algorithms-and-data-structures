const getDecimal = require('./getDecimal');

it('Should return the digit at the indicated decimal index', () => {
	let num = 0.4321;
	expect(getDecimal(num, 0)).toBe(1);
	expect(getDecimal(num, 1)).toBe(2);
	expect(getDecimal(num, 2)).toBe(3);
	expect(getDecimal(num, 3)).toBe(4);
});

it('Should work with negative numbers', () => {
	let num = -0.4321;
	expect(getDecimal(num, 0)).toBe(-1);
	expect(getDecimal(num, 1)).toBe(-2);
	expect(getDecimal(num, 2)).toBe(-3);
	expect(getDecimal(num, 3)).toBe(-4);
});

it('Should return 0 for indices out of range', () => {
	expect(getDecimal(0.4321, 4)).toBe(0);
	expect(getDecimal(0.4321, -1)).toBe(0);
	expect(getDecimal(-0.4321, 100)).toBe(0);
	expect(getDecimal(-0.4321, -100)).toBe(0);
});

it('Should work for large numbers', () => {
	let num = 1234567.987654321;
	expect(getDecimal(num, 0)).toBe(1);
	expect(getDecimal(num, 5)).toBe(6);
	expect(getDecimal(num, 8)).toBe(9);
});
