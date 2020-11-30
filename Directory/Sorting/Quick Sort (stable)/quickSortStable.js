//for better performance overall:
//do the wrapping automatically (without wrapping each object beforehand)
//track placement of each item (so that they do not need to be next to each other)

function groupDuplicates(arr, callback = (el) => el) {
	//create a temporary container to hold array values
	let tempContainer = new Map();

	//wrap duplicate elements in an array
	//store these wrapper arrays in a temporary Map
	for (let i = 0; i < arr.length; i++) {
		//create a Map address out of the array value
		let address = callback(arr[i])?.toString();
		//if the address doesn't yet exist in the container
		//create an array at that address
		if (!tempContainer.has(address)) tempContainer.set(address, []);
		//add the array value to the selected array
		let wrapperArray = tempContainer.get(address);
		wrapperArray.push(arr[i]);
	}

	//convert map into array
	return Array.from(tempContainer.values());
}

function flattenArray(arr) {
	return [].concat(...arr);
}

function partition(arr, low, high, callback) {
	let pivot = callback(arr[low][0]);
	let i = low - 1;
	j = high + 1;

	while (true) {
		do {
			i++;
		} while (callback(arr[i][0]) < pivot);
		do {
			j--;
		} while (callback(arr[j][0]) > pivot);
		if (i >= j) return j;
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

function sort(arr, low, high, callback) {
	if (low < high) {
		let partitionIndex = partition(arr, low, high, callback);
		sort(arr, low, partitionIndex, callback);
		sort(arr, partitionIndex + 1, high, callback);
	}
	return arr;
}

module.exports = function quickSortStable(arr, callback = (el) => el) {
	const groupedArray = groupDuplicates(arr, callback);
	if (groupedArray.length <= 1) return arr;
	const sortedArr = sort(groupedArray, 0, groupedArray.length - 1, callback);
	return flattenArray(sortedArr);
};