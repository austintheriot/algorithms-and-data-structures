const updateBit = require('./updateBit.solution');

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

test('Clear bit,', () => {
	//7 === 0111
	number = 7;
	expect(updateBit(number, 0, 0)).toBe($0110);
	expect(updateBit(number, 1, 0)).toBe($0101);
	expect(updateBit(number, 2, 0)).toBe($0011);
	expect(updateBit(number, 3, 0)).toBe($0111);

	expect(updateBit(number, 0, 1)).toBe($0111);
	expect(updateBit(number, 1, 1)).toBe($0111);
	expect(updateBit(number, 2, 1)).toBe($0111);
	expect(updateBit(number, 3, 1)).toBe($1111);
});
