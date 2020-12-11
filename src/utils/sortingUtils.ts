import shuffle from '../Shuffling/fisherYatesShuffle.solution';

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

export function makeArray(type: MakeArrayTypes, arrayLength: number = 5) {
	switch (type) {
		case 'positiveInteger':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000));

		case 'integer':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000) - 5000);
		case 'integerSorted':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000) - 5000)
				.sort((a, b) => a - b);
		case 'decimal':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.random() * 10000 - 5000);
		case 'decimalSorted':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.random() * 10000 - 5000)
				.sort((a, b) => a - b);
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

interface TestAssertion {
	(sort: Sort, arrayLength: number): void;
}

/* ASSERTION FUNCTIONS /////////////////////////////////////////////////////////////////////////////// */

export const assertSorted = function assertSorted(
	sort: Sort,
	sortedArray: any[]
) {
	let shuffledArray = shuffle([...sortedArray]);
	tryCatchWrap(sort, shuffledArray, sortedArray, assertSorted);
};

export function testPositiveIntegerSorting(sort: Sort, arrayLength = 5) {
	const unsortedArray = makeArray('positiveInteger', arrayLength);
	const sortedArray = [...unsortedArray].sort((a, b) => a - b);
	tryCatchWrap(sort, unsortedArray, sortedArray, testPositiveIntegerSorting);
}

export function testIntegerSorting(sort: Sort, arrayLength = 5) {
	const unsortedArray = makeArray('integer', arrayLength);
	const sortedArray = [...unsortedArray].sort((a, b) => a - b);
	tryCatchWrap(sort, unsortedArray, sortedArray, testIntegerSorting);
}

export function testDecimalSorting(sort: Sort, arrayLength = 5) {
	const unsortedArray = makeArray('decimal', arrayLength);
	const sortedArray = [...unsortedArray].sort((a, b) => a - b);
	tryCatchWrap(sort, unsortedArray, sortedArray, testDecimalSorting);
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
