const toggleBit = require('./toggleBit');

//test comparisons
const $0000 = 0;
const $0001 = 1;
const $0010 = 2;
const $0011 = 3;
const $0100 = 4;
const $0101 = 5;
const $0110 = 6;
const $0111 = 7;
const $1000 = 8;
const $1001 = 9;
const $1010 = 10;
const $1011 = 11;
const $1100 = 12;
const $1101 = 13;
const $1110 = 14;
const $1111 = 15;

describe('Toggle Bit', () => {
	it('Should invert the selected bit', () => {
		expect(toggleBit($0000, 0)).toBe($0001);
		expect(toggleBit($0010, 2)).toBe($0110);
		expect(toggleBit($0011, 3)).toBe($1011);
		expect(toggleBit($1001, 3)).toBe($0001);
		expect(toggleBit($1111, 0)).toBe($1110);
	});
});
