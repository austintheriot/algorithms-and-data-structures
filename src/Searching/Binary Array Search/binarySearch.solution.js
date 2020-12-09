//Recursive solution
function binarySearchRecursive(arr, el, low, high) {
	let middle = Math.floor((high + low) / 2);
	if (low > high || el === undefined) return -1;
	if (arr[middle] > el) return binarySearch(arr, el, low, middle - 1);
	else if (arr[middle] < el) return binarySearch(arr, el, middle + 1, high);
	else if (arr[middle] === el) return middle;
}

//Iterative solution
function binarySearchIterative(arr, el) {
	let low = 0;
	let high = arr.length - 1;
	if (el == undefined) return -1;
	while (low <= high) {
		let mid = Math.floor((high + low) / 2);
		if (el < arr[mid]) high = mid - 1;
		else if (arr[mid] < el) low = mid + 1;
		else if (arr[mid] === el) return mid;
	}
	return -1;
}

//Export for Test Setup ////////////////////////////////////

module.exports = binarySearchIterative;
