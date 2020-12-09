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

function makeArray(type, arrayLength) {
	switch (type) {
		case 'positiveInteger':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000));
		case 'integer':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.floor(Math.random() * 10000) - 5000);
		case 'decimal':
			return new Array(arrayLength)
				.fill(0)
				.map(() => Math.random() * 10000 - 5000);
		case 'empty':
			return [];
		case 'identical':
			return new Array(arrayLength).fill(100);
		default:
			return new Array(arrayLength).fill(0).map(() => Math.random());
	}
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
	assertSorted,
	testPositiveIntegerSorting,
	testIntegerSorting,
	testDecimalSorting,
	testEdgeCases,
};
