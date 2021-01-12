const subtraction = require('./subtraction');

describe('Subtraction', () => {
	it('Should subtract correctly', () => {
		expect(subtraction(-15, -5)).toBe(-10);
		expect(subtraction(-10, 13)).toBe(-23);
		expect(subtraction(0, 0)).toBe(0);
		expect(subtraction(1, 3)).toBe(-2);
		expect(subtraction(3, 1)).toBe(2);
	});
});
