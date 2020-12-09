const countDigits = require('../../../Numbers/Count Digits/countDigits.solution');
const getDigit = require('../../../Numbers/Get Digit/getDigit.solution');

const NUMBER_OF_UNIQUE_DIGITS = 19;

function radixSort(array) {
	//get number of passes required
	let numberOfPasses = getMaxLength(array);

	for (let i = 0; i < numberOfPasses; i++) {
		//sort array the number of times necessary
		let bucketArray = sortArrayIntoBuckets(array, i);
		//flatten buckets into array
		array = [].concat(...bucketArray);
	}

	return array;
}

function sortArrayIntoBuckets(array, pass) {
	let buckets = new Array(NUMBER_OF_UNIQUE_DIGITS).fill(0).map(() => []);
	for (let i = 0; i < array.length; i++) {
		let digit = getDigit(Math.floor(array[i]), pass);
		buckets[digit + 9].push(array[i]);
	}
	return buckets;
}

function getMaxLength(array) {
	let maxLength = 0;
	array.forEach((el) => {
		let length = countDigits(el);
		if (length > maxLength) maxLength = length;
	});
	return maxLength;
}

module.exports = radixSort;
