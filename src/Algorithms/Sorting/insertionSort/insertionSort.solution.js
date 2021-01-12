function insertionSort(arr) {
	//Iterate through elements, beginning at index 1
	for (let i = 1; i < arr.length; i++) {
		//move the index element over every time the item to its left is greater
		for (let j = i; arr[j - 1] > arr[j]; j--) {
			[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
		}
	}
	return arr;
}

module.exports = insertionSort;
