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

*/

//helper functions
const isDisjoint = (min1, min2, max1, max2) =>
	!(min1 <= max2 && max1 >= min2 && min2 <= max1 && max2 >= min1);
const getSlope = (line) => (line.b.y - line.a.y) / (line.b.x - line.a.x);
const getConstant = (line, slope) => line.a.y - slope * line.a.x;
const getXIntersection = (s1, s2, c1, c2) => (c2 - c1) / (s1 - s2);
const getY = (s, x, c) => s * x + c;

export default function intersectionOfTwoLines(line1, line2) {}
