import injectBits from './injectBits';

it('Should inject M into N from the ith to jth bit', () => {
	expect(injectBits(0b0000000000, 0b1010, 0, 3)).toBe(0b0000001010);
	expect(injectBits(0b1111111111, 0b001100, 4, 9)).toBe(0b0011001111);
});
