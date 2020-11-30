function groupDuplicates(arr, callback = (el) => el) {
	let tempContainer = new Map();
	let finalArr = [];

	for (let i = 0; i < arr.length; i++) {
		let address = callback(arr[i]).toString();
		if (!tempContainer.has(address)) tempContainer.set(address, []);
		let wrapperArray = tempContainer.get(address);
		wrapperArray.push(arr[i]);
	}

	for (let keyValues of tempContainer) {
		finalArr.push(keyValues[1]);
	}
	return finalArr;
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
