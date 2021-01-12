//return -1 for unfound elements and nullish search elements

function binarySearch(arr, el, low, high) {
	if (low > high || el == undefined) return -1;
	const mid = Math.floor((low + high) / 2);
	if (el === arr[mid]) return mid;
	else if (arr[mid] < el) return binarySearch(arr, el, mid + 1, high);
	else if (el < arr[mid]) return binarySearch(arr, el, low, mid - 1);
}

//Export for Test Setup (if using a recursive solution) ////////////////////////////////////

function runBinarySearch(arr, el) {
	return binarySearch(arr, el, 0, arr.length - 1);
}

module.exports = runBinarySearch;
