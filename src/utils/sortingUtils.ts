import shuffle from '../Algorithms/Shuffling/fisherYatesShuffle.solution';

/* HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////////////// */

interface Sort {
	(array: any[]): any[];
}

//Wrapping our assertions in a try...catch block gives us more helpful Stack Traces / errors when a test fails
function tryCatchWrap(
	sort: Sort,
	shuffledArray: any[],
	sortedArray: any[],
	functionName: Function
) {
	try {
		expect(sort(shuffledArray)).toEqual(sortedArray);
	} catch (error) {
		//Limit stack track to the line that includes the assertion name
		Error.captureStackTrace(error, functionName);
		throw error;
	}
}

type MakeArrayTypes =
	| 'positiveInteger'
	| 'integer'
	| 'integerSorted'
	| 'decimal'
	| 'decimalSorted'
	| 'empty'
	| 'identical';

export function makeArray(
	type: MakeArrayTypes,
	arrayLength: number = 5
): number[] {
	switch (type) {
		case 'positiveInteger':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000));

		case 'integer':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000) - 5000);
		case 'integerSorted': {
			if (arrayLength === 0) return [];
			if (arrayLength === 2) {
				return [
					Math.floor(Math.random() * -1000),
					Math.floor(Math.random() * 1000),
				];
			}
			const arr = new Array(arrayLength);
			const randomNegative = Math.floor(Math.random() * -1000);
			arr[0] = randomNegative;
			const range = Math.abs(randomNegative * 2);
			const increments = Math.floor(range / Math.max(arrayLength, 1));
			for (let i = 1; i < arrayLength; i++) {
				arr[i] = Math.floor(arr[i - 1] + increments * (Math.random() + 0.5));
			}
			return arr;
		}
		case 'decimal':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.random() * 10000 - 5000);
		case 'decimalSorted': {
			if (arrayLength === 0) return [];
			if (arrayLength === 2) {
				return [Math.random() * -1000, Math.random() * 1000];
			}
			const arr = new Array(arrayLength);
			const randomNegative = Math.random() * -1000;
			arr[0] = randomNegative;
			const range = Math.abs(randomNegative * 2);
			const increments = range / Math.max(arrayLength, 1);
			for (let i = 1; i < arrayLength; i++) {
				arr[i] = arr[i - 1] + increments * (Math.random() + 0.5);
			}
			return arr;
		}
		case 'empty':
			return [];
		case 'identical':
			return new Array(arrayLength).fill(100);
		default:
			return new Array(arrayLength).fill(0).map(() => Math.random());
	}
}

export function chooseRandomIndex(arr: any[]) {
	return Math.floor(Math.random() * arr.length);
}

export function chooseRandomElement(arr: any[]) {
	let i = chooseRandomIndex(arr);
	return arr[i];
}

/* ASSERTION FUNCTIONS /////////////////////////////////////////////////////////////////////////////// */

export const assertSorted = function assertSorted(
	sort: Sort,
	sortedArray: any[]
) {
	let shuffledArray = shuffle([...sortedArray]);
	tryCatchWrap(sort, shuffledArray, sortedArray, assertSorted);
};

export function testPositiveIntegerSorting(
	sort: Sort,
	arrayLength = 10,
	iterations = 10
) {
	for (let i = 0; i < iterations; i++) {
		const unsortedArray = makeArray('positiveInteger', arrayLength);
		const sortedArray = [...unsortedArray].sort((a, b) => a - b);
		tryCatchWrap(sort, unsortedArray, sortedArray, testPositiveIntegerSorting);
	}
}

export function testIntegerSorting(
	sort: Sort,
	arrayLength = 10,
	iterations = 10
) {
	for (let i = 0; i < iterations; i++) {
		const unsortedArray = makeArray('integer', arrayLength);
		const sortedArray = [...unsortedArray].sort((a, b) => a - b);
		tryCatchWrap(sort, unsortedArray, sortedArray, testIntegerSorting);
	}
}

export function testDecimalSorting(
	sort: Sort,
	arrayLength = 10,
	iterations = 10
) {
	for (let i = 0; i < iterations; i++) {
		const unsortedArray = makeArray('decimal', arrayLength);
		const sortedArray = [...unsortedArray].sort((a, b) => a - b);
		tryCatchWrap(sort, unsortedArray, sortedArray, testDecimalSorting);
	}
}

export function testEdgeCases(sort: Sort) {
	//empty array
	let unsortedArray: any[] = [];
	let sortedArray = [...unsortedArray].sort((a, b) => a - b);
	tryCatchWrap(sort, unsortedArray, sortedArray, testEdgeCases);

	//one element array
	unsortedArray = [];
	sortedArray = [...unsortedArray].sort((a, b) => a - b);
	tryCatchWrap(sort, unsortedArray, sortedArray, testEdgeCases);

	//identical integer array
	unsortedArray = [100, 100, 100, 100, 100];
	sortedArray = [...unsortedArray].sort((a, b) => a - b);
	tryCatchWrap(sort, unsortedArray, sortedArray, testEdgeCases);
}
