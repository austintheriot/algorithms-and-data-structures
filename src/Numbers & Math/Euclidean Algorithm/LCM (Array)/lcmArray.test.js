import lcm from './lcmArray';

it('Should return the least common multiple of all the numbers in an array', () => {
	expect(lcm([0])).toBe(0);
	expect(lcm([1, 0])).toBe(0);
	expect(lcm([1])).toBe(1);
	expect(lcm([10])).toBe(10);
	expect(lcm([0, 100, 279])).toBe(0);
	expect(lcm([1, 2, 3])).toBe(6);
	expect(lcm([10, 11])).toBe(110);
	expect(lcm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(2520);
	expect(lcm([3, 5, 7, 11, 13, 17, 23, 27])).toBe(52837785);
	expect(lcm([100, 101, 102, 103, 104, 105])).toBe(9656064600);
});
