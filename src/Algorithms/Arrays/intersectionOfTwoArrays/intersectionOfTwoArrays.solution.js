/* 

	Implement an algorithm to find the intersection of 2 sorted arrays.
	
	Runtime = O(alog(a) + blog(b)) for unsorted arrays and O(a + b) for sorted.

	Could also be accomplished in O(ab) without sorting by comparing 
	every element to every other element.

*/

export default function intersectionOfTwoArrays(array1, array2) {
	const intersection = [];

	//if unsorted, sort the arrays in nlog(n) time
	if (array1.find((el, i, arr) => arr[i - 1] > arr[i])) {
		array1 = [...array1].sort((a, b) => a - b);
	}
	if (array2.find((el, i, arr) => arr[i - 1] > arr[i])) {
		array2 = [...array2].sort((a, b) => a - b);
	}

	//iterate through both arrays at the same time
	//increment the index of the array with the lowest element
	//or increment both if a match is found
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
