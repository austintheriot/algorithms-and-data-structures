const shuffle = require('../src/Shuffling/fisherYatesShuffle.solution');

/* HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////////////// */

//Wrapping our assertions in a try...catch block gives us more helpful Stack Traces / errors when a test fails
function tryCatchWrap(sort, shuffledArray, sortedArray, functionName) {
	try {
		expect(sort(shuffledArray)).toEqual(sortedArray);
	} catch (error) {
		//Limit stack track to the line that includes the assertion name
		Error.captureStackTrace(error, functionName);
		throw error;
	}
}

/**
 * Creates an array.
 * @param {string} type 'positiveInteger' | 'integer' | 'integerSorted' | 'decimal' | 'decimalSorted' |'empty' | 'identical'
 * @param {number} arrayLength The length of the array.
 */
function makeArray(type, arrayLength = 5) {
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

/**
 * Picks a random index from an array
 * @param {array} arr
 */

function chooseRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

/**
 * Picks a random array element from an array
 * @param {array} arr
 */

function chooseRandomElement(arr) {
	let i = chooseRandomIndex(arr);
	return arr[i];
}

function createTestAssertion(arrayType, functionName) {
	global[functionName] = function (sort, arrayLength = 5) {
		const unsortedArray = makeArray(arrayType, arrayLength);
		const sortedArray = [...unsortedArray].sort((a, b) => a - b);
		tryCatchWrap(sort, unsortedArray, sortedArray, global[functionName]);
	};
	return global[functionName];
}

/* ASSERTION FUNCTIONS /////////////////////////////////////////////////////////////////////////////// */

const assertSorted = function assertSorted(sort, sortedArray) {
	let shuffledArray = shuffle([...sortedArray]);
	tryCatchWrap(sort, shuffledArray, sortedArray, assertSorted);
};

const testPositiveIntegerSorting = createTestAssertion(
	'positiveInteger', //make array
	'testPositiveIntegerSorting' //make function
);
const testIntegerSorting = createTestAssertion('integer', 'testIntegerSorting');

const testDecimalSorting = createTestAssertion('decimal', 'testDecimalSorting');

function testEdgeCases(sort) {
	//empty array
	let unsortedArray = [];
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

/* EXPORTS /////////////////////////////////////////////////////////////////////////////// */

module.exports = {
	makeArray,
	chooseRandomIndex,
	chooseRandomElement,
	assertSorted,
	testPositiveIntegerSorting,
	testIntegerSorting,
	testDecimalSorting,
	testEdgeCases,
};
