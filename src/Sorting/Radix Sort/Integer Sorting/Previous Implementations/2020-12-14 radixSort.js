const countDigits = require('../../../Numbers/Count Digits/countDigits.solution');
const getDigit = require('../../../Numbers/Get Digit/getDigit.solution');

const NUMBER_OF_POSSIBLE_SINGLE_DIGITS = 19;

function radixSort(array) {
	const passes = numberOfPasses(array);

	for (let i = 0; i < passes; i++) {
		const buckets = sortIntoBuckets(array, i);
		array = [].concat(...buckets);
	}

	return array;
}

function sortIntoBuckets(array, index) {
	const buckets = new Array(NUMBER_OF_POSSIBLE_SINGLE_DIGITS)
		.fill(null)
		.map(() => []);

	for (let i = 0; i < array.length; i++) {
		let digit = getDigit(array[i], index);
		buckets[digit + 9].push(array[i]);
	}

	return buckets;
}

function numberOfPasses(array) {
	let maxLength = 0;
	array.forEach((el) => {
		const length = countDigits(el);
		if (length > maxLength) {
			maxLength = length;
		}
	});
	return maxLength;
}

module.exports = radixSort;
