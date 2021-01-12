/* 

  Implement an algorithm to find the intersection of 2 sorted arrays.

*/

export default function intersectionOfTwoSortedArrays(array1, array2) {
	const intersection = [];
	let index1 = 0;
	let index2 = 0;
	while (index1 < array1.length && index2 < array2.length) {
		if (array1[index1] < array2[index2]) {
			index1++;
		} else if (array1[index1] > array2[index2]) {
			index2++;
		} else if (array1[index1] === array2[index2]) {
			intersection.push(array1[index1]);
			index1++;
			index2++;
		}
	}
	return intersection;
}
