const countDigits = require('../../../Numbers/Count Digits/countDigits.solution');
const getDigit = require('../../../Numbers/Get Digit/getDigit.solution');

export default function radixSort(array) {
	//determine number of passes required, n

	//iterate through array n times
	//sort elements into buckets based on the radix of the current pass
	//flatten buckets into array

	const passes = countPasses(array);

	for (let i = 0; i < passes; i++) {
		const buckets = sortIntoBuckets(array, i);
		array = [].concat(...buckets);
	}

	return array;
}

function sortIntoBuckets(array, digitIndex) {
	const NUMBER_OF_POSSIBLE_DIGITS = 19;
	const INDEX_OFFSET = 9;
	const buckets = new Array(NUMBER_OF_POSSIBLE_DIGITS).fill(null).map(() => []);

	array.forEach((num) => {
		const digit = getDigit(num, digitIndex);
		const bucket = buckets[digit + INDEX_OFFSET];
		bucket.push(num);
	});

	return buckets;
}

function countPasses(array) {
	let maxLength = 0;
	array.forEach((num) => {
		const length = countDigits(num);
		maxLength = length > maxLength ? length : maxLength;
	});

	return maxLength;
}
