const countDecimals = require('./countDecimals');

it('Should return the number of decimal digits in a number', () => {
	expect(countDecimals(0)).toBe(0);
	expect(countDecimals(987654321)).toBe(0);
	expect(countDecimals(0.1)).toBe(1);
	expect(countDecimals(0.987654321)).toBe(9);
	expect(countDecimals(1234567.987654321)).toBe(9);
	expect(countDecimals(-0)).toBe(0);
	expect(countDecimals(-987654321)).toBe(0);
	expect(countDecimals(-0.40908)).toBe(5);
});
