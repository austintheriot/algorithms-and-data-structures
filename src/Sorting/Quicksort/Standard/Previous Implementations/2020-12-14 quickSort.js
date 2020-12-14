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
		} while (pivot < arr[j]);

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

export default function runQuickSort(arr) {
	return quickSort(arr, 0, arr.length - 1);
}
