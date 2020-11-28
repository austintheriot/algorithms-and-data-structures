function partition(arr, low, high) {
	let pivot = arr[low];
	let i = low - 1;
	j = high + 1;

	while (true) {
		do {
			i++;
		} while (arr[i] < pivot);
		do {
			j--;
		} while (arr[j] > pivot);
		if (i >= j) return j;
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

module.exports = function quickSort(arr, low, high) {
	if (low < high) {
		let partitionIndex = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, partitionIndex);
		quickSort(arr, partitionIndex + 1, high);
	}
	return arr;
};
