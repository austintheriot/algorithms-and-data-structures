//return -1 for unfound elements and nullish search elements
'use strict';

function binarySearch(arr, el, low, high) {
	if (low > high || el == undefined) return -1;
	const mid = Math.floor((high + low) / 2);
	if (arr[mid] === el) return mid;
	if (arr[mid] < el) return binarySearch(arr, el, mid + 1, high);
	if (el < arr[mid]) return binarySearch(arr, el, low, mid - 1);
}

//Export for Test Setup (if using a recursive solution) ////////////////////////////////////
export default function runBinarySearch(arr, el) {
	return binarySearch(arr, el, 0, arr.length - 1);
}
