const countDigits = require('../../../Numbers/Count Digits/countDigits.solution');
const getDigit = require('../../../Numbers/Get Digit/getDigit.solution');

function radixSort(array) {
	const passes = numberOfPasses(array);
	for (let digitIndex = 0; digitIndex < passes; digitIndex++) {
		const buckets = sortIntoBuckets(array, digitIndex);
		array = [].concat(...buckets);
	}
	return array;
}

function sortIntoBuckets(array, digitIndex) {
	const buckets = new Array(19).fill(null).map(() => []);
	for (let i = 0; i < array.length; i++) {
		const digit = getDigit(array[i], digitIndex);
		buckets[digit + 9].push(array[i]);
	}
	return buckets;
}

function numberOfPasses(array) {
	let maxLength = 0;
	array.forEach((integer) => {
		let length = countDigits(integer);
		maxLength = length > maxLength ? length : maxLength;
	});
	return maxLength;
}

module.exports = radixSort;
