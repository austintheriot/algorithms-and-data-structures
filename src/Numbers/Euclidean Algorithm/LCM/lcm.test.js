import lcm from './lcm';

it('Should return the LCM of two nubmers', () => {
	expect(lcm(2, 3)).toBe(6);
	expect(lcm(17, 13)).toBe(221);
	expect(lcm(24, 32)).toBe(96);
	expect(lcm(12345, 54321)).toBe(223530915);
});
