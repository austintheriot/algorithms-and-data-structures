const mergeSort = (originalArray) => {
	let sortedArray = [];

	//recursive escape case:
	//array of size 0 or 1 are already sorted
	if (originalArray.length <= 1) return originalArray;

	//split array in half
	const middleIndex = Math.floor(originalArray.length / 2);
	const leftArrayUnsorted = originalArray.slice(0, middleIndex);
	const rightArrayUnsorted = originalArray.slice(middleIndex);

	//if length is greater than 1
	//split array into subarrays and merge together in sorted order
	const leftArray = mergeSort(leftArrayUnsorted);
	const rightArray = mergeSort(rightArrayUnsorted);

	//recursively returned array halves are now sorted

	//should not try to sort arrays of length 0
	//find the minimum element between the two arrays,
	//move from array into sortedArray
	while (leftArray.length && rightArray.length) {
		let minimumElement =
			leftArray[0] < rightArray[0] ? leftArray.shift() : rightArray.shift();
		sortedArray.push(minimumElement);
	}

	//one of the two arrays may still have elements remaining
	//add them into the sorted array
	if (leftArray.length) sortedArray = sortedArray.concat(leftArray);
	if (rightArray.length) sortedArray = sortedArray.concat(rightArray);
	return sortedArray;
};

module.exports = mergeSort;
