/* 

  Implement an algorithm to find the intersection of 2 sorted arrays.
  The arrays are not necessarily sorted.

*/

export default function intersectionOfTwoArrays(a1, a2) {
	const intersection = [];
	a1 = a1.sort((a, b) => a - b);
	a2 = a2.sort((a, b) => a - b);

	for (let i1 = 0, i2 = 0; i1 < a1.length && i2 < a2.length; ) {
		if (a1[i1] < a2[i2]) i1++;
		else if (a2[i2] < a1[i1]) i2++;
		else if (a1[i1] === a2[i2]) {
			intersection.push(a1[i1]);
			i1++, i2++;
		}
	}

	return intersection;
}
