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

describe('Consolidate Array Duplicates', () => {
	it('Should wrap all elements in a container array', () => {
		let prePackedArr = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
		let packedArr = groupDuplicates(prePackedArr);
		let resultArray = [[0], [1, 1], [2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4, 4]];
		expect(packedArr).toEqual(resultArray);
		expect(packedArr.length).toBe(5);
	});

	it('Should group identical elements together (in the order in which they appeared)', () => {
		let prePackedArr = [0, 1, 2, 3, 4, 3, 2, 3, 4, 4, 3, 4, 1, 4, 2];
		let packedArr = groupDuplicates(prePackedArr);
		let resultArray = [[0], [1, 1], [2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4, 4]];
		expect(packedArr).toEqual(resultArray);
		expect(packedArr.length).toBe(5);
	});

	it('Should group null elements', () => {
		let prePackedArr = [0, 1, 2, 3, 4, 3, 2, 3, 4, 4, 3, 4, 1, 4, 2];
		let packedArr = groupDuplicates(prePackedArr);
		let resultArray = [[0], [1, 1], [2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4, 4]];
		expect(packedArr).toEqual(resultArray);
		expect(packedArr.length).toBe(5);
	});
});

module.exports = groupDuplicates;
