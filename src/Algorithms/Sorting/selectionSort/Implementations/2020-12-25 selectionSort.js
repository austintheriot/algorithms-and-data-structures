export default function selectionSort(arr) {
	//iterate through array
	//find the minimum element if front of the current element
	//swap that element with the current

	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
	}

	return arr;
}
