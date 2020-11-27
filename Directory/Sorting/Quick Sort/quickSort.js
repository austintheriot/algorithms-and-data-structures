const swap = (array, index1, index2) => {
	const temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;

	return array;
};

//Choose a pivot
function partition(array, leftIndex, rightIndex) {
	//get center index between the left and right indexes
	const pivotIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
	//get center value
	let pivotValue = array[pivotIndex];

	//scan array for items that need to be swapped
	while (leftIndex <= rightIndex) {
		//find element on left that should be on right
		while (array[leftIndex] < pivotValue) leftIndex++;

		//find element on rightIndex that should be on leftIndex
		while (array[rightIndex] > pivotValue) rightIndex--;

		//if left and right pointers both found an element to swap,
		//swap elements, and move leftIndex and rightIndex indices
		if (leftIndex <= rightIndex) {
			//swap elements
			swap(array, leftIndex, rightIndex);
			//ignore previously viewed/swapped elements and continue searching
			leftIndex++;
			rightIndex--;
		}
	}
	return leftIndex;
}

module.exports = function quickSort(array, leftIndex, rightIndex) {
	let pivotIndex = partition(array, leftIndex, rightIndex);

	//sort left half
	if (leftIndex < pivotIndex - 1) {
		quickSort(array, leftIndex, pivotIndex - 1);
	}

	//sort right half
	if (rightIndex > pivotIndex) {
		quickSort(array, pivotIndex, rightIndex);
	}

	return array;
};
