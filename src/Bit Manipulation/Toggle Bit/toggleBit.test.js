const toggleBit = require('./toggleBit');

//test comparisons
describe('Toggle Bit', () => {
	it('Should invert the selected bit', () => {
		expect(toggleBit(0b0000, 0)).toBe(0b0001);
		expect(toggleBit(0b0010, 2)).toBe(0b0110);
		expect(toggleBit(0b0011, 3)).toBe(0b1011);
		expect(toggleBit(0b1001, 3)).toBe(0b0001);
		expect(toggleBit(0b1111, 0)).toBe(0b1110);
	});
});
