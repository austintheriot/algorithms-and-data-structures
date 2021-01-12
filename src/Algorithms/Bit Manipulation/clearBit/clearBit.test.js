const clearBit = require('./clearBit');

it('Clear bit,', () => {
	let number = 0b0001;
	expect(clearBit(number, 0)).toBe(0b0000);
	expect(clearBit(number, 1)).toBe(0b0001);
	expect(clearBit(number, 2)).toBe(0b0001);
	expect(clearBit(number, 3)).toBe(0b0001);

	number = 0b0010;
	expect(clearBit(number, 0)).toBe(0b0010);
	expect(clearBit(number, 1)).toBe(0b0000);
	expect(clearBit(number, 2)).toBe(0b0010);
	expect(clearBit(number, 3)).toBe(0b0010);

	//3 === 0011
	number = 0b0011;
	expect(clearBit(number, 0)).toBe(0b0010);
	expect(clearBit(number, 1)).toBe(0b0001);
	expect(clearBit(number, 2)).toBe(0b0011);
	expect(clearBit(number, 3)).toBe(0b0011);

	//4 === 0100
	number = 0b0100;
	expect(clearBit(number, 0)).toBe(0b0100);
	expect(clearBit(number, 1)).toBe(0b0100);
	expect(clearBit(number, 2)).toBe(0b0000);
	expect(clearBit(number, 3)).toBe(0b0100);

	//5 === 0101
	number = 0b0101;
	expect(clearBit(number, 0)).toBe(0b0100);
	expect(clearBit(number, 1)).toBe(0b0101);
	expect(clearBit(number, 2)).toBe(0b0001);
	expect(clearBit(number, 3)).toBe(0b0101);

	//6 === 0110
	number = 0b0110;
	expect(clearBit(number, 0)).toBe(0b0110);
	expect(clearBit(number, 1)).toBe(0b0100);
	expect(clearBit(number, 2)).toBe(0b0010);
	expect(clearBit(number, 3)).toBe(0b0110);

	//7 === 0111
	number = 0b0111;
	expect(clearBit(number, 0)).toBe(0b0110);
	expect(clearBit(number, 1)).toBe(0b0101);
	expect(clearBit(number, 2)).toBe(0b0011);
	expect(clearBit(number, 3)).toBe(0b0111);
});
