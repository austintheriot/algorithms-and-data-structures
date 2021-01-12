import intersectionOfTwoLines from './intersectionOfTwoLines';

it('Should return the intersection of two line segments if any exists', () => {
	//intersecting lines
	let line1 = {
		a: { x: -1, y: 2 },
		b: { x: 3, y: 2 },
	};
	let line2 = {
		a: { x: -2, y: -9 },
		b: { x: 2, y: 3 },
	};
	let intersection = { x: 5 / 3, y: 2 };
	expect(intersectionOfTwoLines(line1, line2)).toEqual(intersection);

	//non-intersecting (non-parallel)
	line1 = {
		a: { x: 0, y: 0 },
		b: { x: 1, y: 3 },
	};
	line2 = {
		a: { x: 2, y: 0 },
		b: { x: 4, y: 2 },
	};
	expect(intersectionOfTwoLines(line1, line2)).toBeUndefined();

	//parallel
	line1 = {
		a: { x: 0, y: 1 },
		b: { x: 1, y: 2 },
	};
	line2 = {
		a: { x: 1, y: 0 },
		b: { x: 2, y: 1 },
	};
	expect(intersectionOfTwoLines(line1, line2)).toBeUndefined();

	//identical lines
	line1 = {
		a: { x: 0, y: 1 },
		b: { x: 1, y: 2 },
	};
	line2 = {
		a: { x: 0, y: 1 },
		b: { x: 1, y: 2 },
	};
	intersection = Infinity;
	expect(intersectionOfTwoLines(line1, line2)).toBe(intersection);

	//vertical line
	line1 = {
		a: { x: 0, y: 2 },
		b: { x: 3, y: 2 },
	};
	line2 = {
		a: { x: 2, y: 0 },
		b: { x: 2, y: 3 },
	};
	intersection = { x: 2, y: 2 };
	expect(intersectionOfTwoLines(line1, line2)).toEqual(intersection);

	//parallel vertical lines
	line1 = {
		a: { x: 1, y: 0 },
		b: { x: 1, y: 3 },
	};
	line2 = {
		a: { x: 2, y: 0 },
		b: { x: 2, y: 3 },
	};
	expect(intersectionOfTwoLines(line1, line2)).toBeUndefined();

	//parallel horizontal lines
	line1 = {
		a: { x: 0, y: 3 },
		b: { x: 3, y: 3 },
	};
	line2 = {
		a: { x: 0, y: 1 },
		b: { x: 3, y: 1 },
	};
	expect(intersectionOfTwoLines(line1, line2)).toBeUndefined();

	//one point touching
	line1 = {
		a: { x: -17, y: -18 },
		b: { x: 6, y: 8 },
	};
	line2 = {
		a: { x: 6, y: 8 },
		b: { x: 13, y: -16 },
	};
	intersection = { x: 6, y: 7.999999999999998 };
	expect(intersectionOfTwoLines(line1, line2)).toEqual(intersection);
});
