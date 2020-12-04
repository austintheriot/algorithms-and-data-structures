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

	return sortedArray.concat(
		leftArray.slice(leftIndex),
		rightArray.slice(rightIndex)
	);
};

module.exports = function mergeSort(unsortedArray) {
	if (unsortedArray.length <= 1) return unsortedArray;
	const arr = [...unsortedArray];
	const middleIndex = Math.round(unsortedArray.length / 2);
	const unsortedLeftArray = arr.slice(0, middleIndex);
	const unsortedRightArray = arr.slice(middleIndex);

	const sortedLeftArray = mergeSort(unsortedLeftArray);
	const sortedRightArray = mergeSort(unsortedRightArray);

	return merge(sortedLeftArray, sortedRightArray);
};
