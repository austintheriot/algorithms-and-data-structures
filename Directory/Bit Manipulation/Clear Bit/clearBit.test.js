const clearBit = require('./clearBit.solution');

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

it('Clear bit,', () => {
	let number = $0001;
	expect(clearBit(number, 0)).toBe($0000);
	expect(clearBit(number, 1)).toBe($0001);
	expect(clearBit(number, 2)).toBe($0001);
	expect(clearBit(number, 3)).toBe($0001);

	number = $0010;
	expect(clearBit(number, 0)).toBe($0010);
	expect(clearBit(number, 1)).toBe($0000);
	expect(clearBit(number, 2)).toBe($0010);
	expect(clearBit(number, 3)).toBe($0010);

	//3 === 0011
	number = $0011;
	expect(clearBit(number, 0)).toBe($0010);
	expect(clearBit(number, 1)).toBe($0001);
	expect(clearBit(number, 2)).toBe($0011);
	expect(clearBit(number, 3)).toBe($0011);

	//4 === 0100
	number = $0100;
	expect(clearBit(number, 0)).toBe($0100);
	expect(clearBit(number, 1)).toBe($0100);
	expect(clearBit(number, 2)).toBe($0000);
	expect(clearBit(number, 3)).toBe($0100);

	//5 === 0101
	number = $0101;
	expect(clearBit(number, 0)).toBe($0100);
	expect(clearBit(number, 1)).toBe($0101);
	expect(clearBit(number, 2)).toBe($0001);
	expect(clearBit(number, 3)).toBe($0101);

	//6 === 0110
	number = $0110;
	expect(clearBit(number, 0)).toBe($0110);
	expect(clearBit(number, 1)).toBe($0100);
	expect(clearBit(number, 2)).toBe($0010);
	expect(clearBit(number, 3)).toBe($0110);

	//7 === 0111
	number = $0111;
	expect(clearBit(number, 0)).toBe($0110);
	expect(clearBit(number, 1)).toBe($0101);
	expect(clearBit(number, 2)).toBe($0011);
	expect(clearBit(number, 3)).toBe($0111);
});
