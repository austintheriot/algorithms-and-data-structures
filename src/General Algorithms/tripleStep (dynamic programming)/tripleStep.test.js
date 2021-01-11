import tripleStep from './tripleStep';

it('Should return the number of different ways a person can run up a staircase', () => {
	expect(tripleStep(1)).toBe(1);
	expect(tripleStep(2)).toBe(2);
	expect(tripleStep(3)).toBe(4);
	expect(tripleStep(4)).toBe(7);
	expect(tripleStep(5)).toBe(13);
	expect(tripleStep(6)).toBe(24);
	expect(tripleStep(7)).toBe(44);
	expect(tripleStep(8)).toBe(81);
	expect(tripleStep(9)).toBe(149);
	expect(tripleStep(10)).toBe(274);
});
