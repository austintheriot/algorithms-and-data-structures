const getBit = require('./getBit.solution');

test('Get bit (zero based),', () => {
	//1 === 0001
	let number = 1;
	expect(getBit(number, 0)).toBe(1); //1s place
	expect(getBit(number, 1)).toBe(0); //too far

	//2 === 0010
	number = 2;
	expect(getBit(number, 0)).toBe(0); //1s place
	expect(getBit(number, 1)).toBe(1); //2s place
	expect(getBit(number, 2)).toBe(0); //too far

	//3 === 0011
	number = 3;
	expect(getBit(number, 0)).toBe(1); //1s place
	expect(getBit(number, 1)).toBe(1); //2s place
	expect(getBit(number, 2)).toBe(0); //too far

	//4 === 0100
	number = 4;
	expect(getBit(number, 0)).toBe(0); //1s place
	expect(getBit(number, 1)).toBe(0); //2s place
	expect(getBit(number, 2)).toBe(1); //4s place
	expect(getBit(number, 3)).toBe(0); //too far

	//5 === 0101
	number = 5;
	expect(getBit(number, 0)).toBe(1); //1s place
	expect(getBit(number, 1)).toBe(0); //2s place
	expect(getBit(number, 2)).toBe(1); //4s place
	expect(getBit(number, 3)).toBe(0); //too far

	//6 === 0110
	number = 6;
	expect(getBit(number, 0)).toBe(0); //1s place
	expect(getBit(number, 1)).toBe(1); //2s place
	expect(getBit(number, 2)).toBe(1); //4s place
	expect(getBit(number, 3)).toBe(0); //too far

	//7 === 0111
	number = 7;
	expect(getBit(number, 0)).toBe(1); //1s place
	expect(getBit(number, 1)).toBe(1); //2s place
	expect(getBit(number, 2)).toBe(1); //4s place
	expect(getBit(number, 3)).toBe(0); //too far
});
