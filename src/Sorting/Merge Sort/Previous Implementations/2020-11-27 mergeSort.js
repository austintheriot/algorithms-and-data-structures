const merge = (leftArray, rightArray) => {
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

	return sortedArray
		.concat(leftArray.slice(leftIndex))
		.concat(rightArray.slice(rightIndex));
};

module.exports = function mergeSort(unsortedArray) {
	if (unsortedArray.length <= 1) return unsortedArray;

	const middleIndex = Math.floor(unsortedArray.length / 2);
	const leftArray = unsortedArray.slice(0, middleIndex);
	const rightArray = unsortedArray.slice(middleIndex);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
};
