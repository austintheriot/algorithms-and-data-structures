const getDigit = require('../../../Numbers/Get Digit/getDigit.solution');
const countDigits = require('../../../Numbers/Count Digits/countDigits.solution');
const getDecimal = require('../../../Numbers/Get Decimal/getDecimal.solution');
const countDecimals = require('../../../Numbers/Count Decimals/countDecimals.solution');

function radixSort(array) {
	const numDecimalPasses = determineNumberOfPasses(array, countDecimals);
	//iterate through the indexes of each number
	for (let i = 0; i < numDecimalPasses; i++) {
		//sort elements into buckets
		const buckets = placeElementsInNumberBuckets(array, i, getDecimal);
		//flatten buckets into array, and repeat at next index
		array = [].concat(...buckets);
	}

	const numIntegerPasses = determineNumberOfPasses(array, countDigits);
	//iterate through the indexes of each number
	for (let i = 0; i < numIntegerPasses; i++) {
		//sort elements into buckets
		const buckets = placeElementsInNumberBuckets(array, i, getDigit);
		//flatten buckets into array, and repeat at next index
		array = [].concat(...buckets);
	}

	return array;
}

function placeElementsInNumberBuckets(array, index, getterCallback) {
	//create 19 buckets (1 for each digit from -9 to +9)
	const buckets = new Array(19).fill(null).map(() => []);

	//put number into the index corresponding to its digit
	array.forEach((num) => {
		const currentDigit = getterCallback(num, index);
		buckets[currentDigit + 9].push(num); //offset to make -9 index 0
	});

	return buckets;
}

//find the length of the longest decimal in the array
function determineNumberOfPasses(array, countCallback) {
	let maxLength = 0;
	for (let i = 0; i < array.length; i++) {
		if (countCallback(array[i]) > maxLength) maxLength = length;
	}
	return maxLength;
}

module.exports = radixSort;
