const countDigits = require('../../../Numbers/Count Digits/countDigits.solution');
const getDigit = require('../../../Numbers/Get Digit/getDigit.solution');

export default function radixSort(array) {
	//determine the number of passes required, n
	const passes = countPasses(array);

	for (let digitIndex = 0; digitIndex < passes; digitIndex++) {
		const buckets = sortIntoBuckets(array, digitIndex);
		array = [].concat(...buckets);
	}

	//iterate through the array n times
	//on each pass, sort the array into buckets based on the current digit
	//flatten into the anwser array

	return array;
}

function sortIntoBuckets(array, digitIndex) {
	const NUMBER_OF_POSSIBLE_DIGITS = 19;
	const RADIX_OFFSET = 9;

	//init buckets
	const buckets = new Array(NUMBER_OF_POSSIBLE_DIGITS).fill(null).map(() => []);

	array.forEach((num) => {
		const digit = getDigit(num, digitIndex);
		buckets[digit + RADIX_OFFSET].push(num); //put original number in bucket
	});

	return buckets;
}

function countPasses(array) {
	let maxLength = 0;
	array.forEach((el) => {
		const length = countDigits(el);
		if (length > maxLength) maxLength = length;
	});

	return maxLength;
}
