import setBit from './setBit';

it('Set bit,', () => {
	//1 === 0001
	let number = 1;
	expect(setBit(number, 0)).toBe(1); //0001
	expect(setBit(number, 1)).toBe(3); //0011

	//2 === 0010
	number = 2;
	expect(setBit(number, 0)).toBe(3); //0011
	expect(setBit(number, 1)).toBe(2); //0010
	expect(setBit(number, 2)).toBe(6); //0110

	//3 === 0011
	number = 3;
	expect(setBit(number, 0)).toBe(3); //0011
	expect(setBit(number, 1)).toBe(3); //0011
	expect(setBit(number, 2)).toBe(7); //0111

	//4 === 0100
	number = 4;
	expect(setBit(number, 0)).toBe(5); //0101
	expect(setBit(number, 1)).toBe(6); //0110
	expect(setBit(number, 2)).toBe(4); //0100
	expect(setBit(number, 3)).toBe(12); //1100

	//5 === 0101
	number = 5;
	expect(setBit(number, 0)).toBe(5); //0101
	expect(setBit(number, 1)).toBe(7); //0111
	expect(setBit(number, 2)).toBe(5); //0101
	expect(setBit(number, 3)).toBe(13); //1101

	//6 === 0110
	number = 6;
	expect(setBit(number, 0)).toBe(7); //0111
	expect(setBit(number, 1)).toBe(6); //0110
	expect(setBit(number, 2)).toBe(6); //0110
	expect(setBit(number, 3)).toBe(14); //1110

	//7 === 0111
	number = 7;
	expect(setBit(number, 0)).toBe(7); //0111
	expect(setBit(number, 1)).toBe(7); //0111
	expect(setBit(number, 2)).toBe(7); //0111
	expect(setBit(number, 3)).toBe(15); //1111
});
