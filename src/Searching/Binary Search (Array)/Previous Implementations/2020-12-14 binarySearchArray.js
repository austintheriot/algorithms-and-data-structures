//return -1 for unfound elements and nullish search elements
'use strict';

function binarySearch(arr, el, low, high) {
	const mid = Math.floor((low + high) / 2);
	if (low > high || el == undefined) return -1;
	if (el < arr[mid]) return binarySearch(arr, el, low, mid - 1);
	if (arr[mid] < el) return binarySearch(arr, el, mid + 1, high);
	if (arr[mid] === el) return mid;
}

//Export for Test Setup (if using a recursive solution) ////////////////////////////////////

export default function runBinarySearch(arr, el) {
	return binarySearch(arr, el, 0, arr.length - 1);
}
