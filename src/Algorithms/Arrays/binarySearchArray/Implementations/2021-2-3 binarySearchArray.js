//return -1 for unfound elements and nullish search elements
'use strict';

export default function binarySearch(arr, el, low, high) {
	low = low ?? 0;
	high = high ?? arr.length - 1;
	if (low > high || el == undefined) return -1;
	const middle = Math.floor(low + (high - low) / 2);
	if (arr[middle] < el) return binarySearch(arr, el, middle + 1, high);
	if (el < arr[middle]) return binarySearch(arr, el, low, high - 1);
	if (el === arr[middle]) return middle;
}

