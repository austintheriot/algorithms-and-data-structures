function partition(arr, low, high) {
	const pivot = arr[Math.floor((low + high) / 2)];
	let i = low - 1;
	let j = high + 1;

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

function quickSort(arr, low, high) {
	if (low < high) {
		const partitionIndex = partition(arr, low, high);
		quickSort(arr, low, partitionIndex);
		quickSort(arr, partitionIndex + 1, high);
	}
	return arr;
}

module.exports = quickSort;
