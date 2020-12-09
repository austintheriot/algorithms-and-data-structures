const search = require('./binarySearch');
const testUtils = require('../../../utils/testUtils');

describe('Binary Array Search', () => {
	it('Should find the index of a number in an array', () => {
		let arr = testUtils.makeArray('integerSorted', 100);
		let i = testUtils.chooseRandomIndex(arr);
		expect(search(arr, arr[i])).toBe(i);

		arr = testUtils.makeArray('decimalSorted', 100);
		i = testUtils.chooseRandomIndex(arr);
		expect(search(arr, arr[i])).toBe(i);
	});

	it('Should find the index of a number at either end of an array', () => {
		let arr = testUtils.makeArray('integerSorted', 100);
		expect(search(arr, arr[0])).toBe(0);

		arr = testUtils.makeArray('integerSorted', 100);
		expect(search(arr, arr[99])).toBe(99);
	});

	it('Should return -1 when number is not found', () => {
		arr = testUtils.makeArray('integerSorted', 100);
		expect(search(arr, 0.123456789)).toBe(-1);

		arr = testUtils.makeArray('decimalSorted', 100);
		expect(search(arr, 123456789)).toBe(-1);
	});

	it('Should return -1 when search element is nullish', () => {
		arr = testUtils.makeArray('integerSorted', 100);
		expect(search(arr, arr[100])).toBe(-1);
		expect(search(arr, null)).toBe(-1);
	});
});
