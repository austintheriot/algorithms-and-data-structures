const addition = require('./addition');

describe('Bitwise Addition', () => {
	it('Should add correctly', () => {
		expect(addition(-11, -22)).toBe(-33);
		expect(addition(-1, 8)).toBe(7);
		expect(addition(0, 0)).toBe(0);
		expect(addition(0, 1)).toBe(1);
		expect(addition(1, 2)).toBe(3);
		expect(addition(15, 17)).toBe(32);
	});
});
