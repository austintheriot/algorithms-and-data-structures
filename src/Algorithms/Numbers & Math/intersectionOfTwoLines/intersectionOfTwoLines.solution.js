/* 

  Implement an algorithm to return the point of intersection 
  for two straight line segments, if any exists. You can assume that
  the point a will be further left & downward than point b if the slope
  is not constant.
  
  For Example: 
  const line1 = {
    a: { x: 2, y: 0 },
		b: { x: 2, y: 3 },
  };
  
	const line2 = {
    a: { x: 0, y: 2 },
		b: { x: 3, y: 2 },
  };
  
  intersectionOfTwoLines(line1, line2) --> { x: 2, y: 2 }

  Runtime: O(1)
  Space: O(1)
*/

//helper functions
const isDisjoint = (min1, min2, max1, max2) =>
	!(min1 <= max2 && max1 >= min2 && min2 <= max1 && max2 >= min1);
const getSlope = (line) => (line.b.y - line.a.y) / (line.b.x - line.a.x);
const getConstant = (line, slope) => line.a.y - slope * line.a.x;
const getXIntersection = (s1, s2, c1, c2) => (c2 - c1) / (s1 - s2);
const getY = (s, x, c) => s * x + c;

export default function intersectionOfTwoLines(line1, line2) {
	//if their domains and ranges are disjoint, they don't intersect
	if (
		isDisjoint(line1.a.x, line2.a.x, line1.b.x, line2.b.x) ||
		isDisjoint(line1.a.y, line2.a.y, line1.b.y, line2.b.y)
	)
		return undefined;

	//calculate slopes
	const s1 = getSlope(line1);
	const s2 = getSlope(line2);

	//calulcate constants
	const c1 = getConstant(line1, s1);
	const c2 = getConstant(line2, s2);

	//if slope and constant are identical, they're the same line
	if (s1 === s2 && c1 === c2) return Infinity;
	//if only the slopes are identical, they are parallel
	else if (s1 === s2) return undefined;

	//line 1 is vertical
	//plug line1's x value  into line2's equation
	if (Math.abs(s1) === Infinity) {
		return { x: line1.a.x, y: getY(s2, line1.a.x, c2) };
	}

	//line 2 is vertical
	//plug line2's x value into line1's equation
	else if (Math.abs(s2) === Infinity) {
		return { x: line2.a.x, y: getY(s1, line2.a.x, c1) };
	}

	//else all is well. find point of intersection
	const x = getXIntersection(s1, s2, c1, c2);
	return { x, y: getY(s1, x, c1) };
}
