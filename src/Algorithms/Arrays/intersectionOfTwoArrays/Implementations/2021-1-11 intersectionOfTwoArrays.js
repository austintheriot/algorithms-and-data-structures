/* 

  Implement an algorithm to find the intersection of 2 sorted arrays.
  The arrays are not necessarily sorted.

*/

export default function intersectionOfTwoArrays(array1, array2) {
	const intersection = [];

	//sort elements
	if (array1.find((_, i, arr) => arr[i - 1] > arr[i])) {
		array1 = array1.sort((a, b) => a - b);
	}
	if (array2.find((_, i, arr) => arr[i - 1] > arr[i])) {
		array2 = array2.sort((a, b) => a - b);
	}

	let i1 = 0;
	let i2 = 0;

	while (i1 < array1.length && i2 < array2.length) {
		if (array1[i1] < array2[i2]) {
			i1++;
		} else if (array2[i2] < array1[i1]) {
			i2++;
		} else if (array1[i1] === array2[i2]) {
			intersection.push(array1[i1]);
			i1++, i2++;
		}
	}

	return intersection;
}
