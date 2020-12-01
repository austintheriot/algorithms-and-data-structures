function quickSort(arr, low, high) {
	let partitionIndex;
	if (low < high) {
		let pivot = arr[Math.floor((low + high) / 2)];
		let i = low - 1;
		j = high + 1;

		while (true) {
			do {
				i++;
			} while (arr[i] < pivot);
			do {
				j--;
			} while (arr[j] > pivot);
			if (i >= j) {
				partitionIndex = j;
				break;
			}
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, partitionIndex);
		quickSort(arr, partitionIndex + 1, high);
	}
	return arr;
}

module.exports = quickSort;
