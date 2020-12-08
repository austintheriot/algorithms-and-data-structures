function merge(leftArray, rightArray) {
	const sortedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			sortedArray.push(leftArray[leftIndex]);
			leftIndex++;
		} else {
			sortedArray.push(rightArray[rightIndex]);
			rightIndex++;
		}
	}

	return sortedArray.concat(
		leftArray.slice(leftIndex),
		rightArray.slice(rightIndex)
	);
}

module.exports = function mergeSort(array) {
	if (array.length <= 1) return array;
	const middleIndex = Math.floor(array.length / 2);
	const leftArray = array.slice(0, middleIndex);
	const rightArray = array.slice(middleIndex);
	return merge(mergeSort(leftArray), mergeSort(rightArray));
};
