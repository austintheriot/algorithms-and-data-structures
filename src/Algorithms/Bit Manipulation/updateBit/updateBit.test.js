const updateBit = require('./updateBit');

it('Update bit,', () => {
	//7 === 0111
	const number = 0b0111;
	expect(updateBit(number, 0, 0)).toBe(0b0110);
	expect(updateBit(number, 1, 0)).toBe(0b0101);
	expect(updateBit(number, 2, 0)).toBe(0b0011);
	expect(updateBit(number, 3, 0)).toBe(0b0111);

	expect(updateBit(number, 0, 1)).toBe(0b0111);
	expect(updateBit(number, 1, 1)).toBe(0b0111);
	expect(updateBit(number, 2, 1)).toBe(0b0111);
	expect(updateBit(number, 3, 1)).toBe(0b1111);
});
