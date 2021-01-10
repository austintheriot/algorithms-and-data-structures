import rotate from './rotateArray';

it('Should rotate an array to the right by indicated amount', () => {
	const array = [0, 1, 2, 3, 4, 5];
	expect(rotate([...array], 1)).toEqual([5, 0, 1, 2, 3, 4]);
	expect(rotate([...array], 5)).toEqual([1, 2, 3, 4, 5, 0]);
	expect(rotate([...array], 6)).toEqual([0, 1, 2, 3, 4, 5]);
	expect(rotate([...array], 37)).toEqual([5, 0, 1, 2, 3, 4]);
});
