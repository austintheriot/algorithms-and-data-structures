'use strict';
function merge(leftArray, rightArray) {
	const sorted = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			sorted.push(leftArray[leftIndex]);
			leftIndex++;
		} else {
			sorted.push(rightArray[rightIndex]);
			rightIndex++;
		}
	}

	return sorted.concat(
		leftArray.slice(leftIndex),
		rightArray.slice(rightIndex)
	);
}

export default function mergeSort(array) {
	if (array.length <= 1) return array;

	const middleIndex = Math.floor(array.length / 2);
	const leftArray = array.slice(0, middleIndex);
	const rightArray = array.slice(middleIndex);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
}
