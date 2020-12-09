const merge = (leftArray, rightArray) => {
	let sortedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	//start with leftmost element on both arrays
	//find the minimum element between the two arrays,
	//move from array into sortedArray
	//shift the index pointer to the right
	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			sortedArray.push(leftArray[leftIndex]);
			leftIndex++; //move left cursor over
		} else {
			sortedArray.push(rightArray[rightIndex]);
			rightIndex++; //move right cursor over
		}
	}

	//there will be one element remaining from either the left OR the right
	return sortedArray
		.concat(leftArray.slice(leftIndex))
		.concat(rightArray.slice(rightIndex));
};

const mergeSort = (unsortedArray) => {
	//recursive escape case:
	//array of size 0 or 1 are already sorted
	if (unsortedArray.length <= 1) return unsortedArray;

	//split array in half
	const middleIndex = Math.floor(unsortedArray.length / 2);
	const unsortedLeftArray = unsortedArray.slice(0, middleIndex);
	const unsortedRightArray = unsortedArray.slice(middleIndex);

	//if length is greater than 1
	//split array into subarrays and merge together in sorted order
	const sortedLeftArray = mergeSort(unsortedLeftArray);
	const sortedRightArray = mergeSort(unsortedRightArray);
	//recursively returned array halves are now sorted

	//merge them together in correct sorted order
	return merge(sortedLeftArray, sortedRightArray);
};

module.exports = mergeSort;
