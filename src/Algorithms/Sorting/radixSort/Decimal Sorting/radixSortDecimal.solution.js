function radixSort(array) {
	//assume all array elements are integers
	//find the longest number or character in array:
	//this is equivalent to the number of necessary passes
	const numPasses = determineNumPasses(array);

	//iterate through the indexes of each number
	for (let i = 0; i < numPasses; i++) {
		//sort elements into buckets
		const buckets = placeElementsInNumberBuckets(array, i);
		//flatten buckets into array, and repeat at next index
		array = [].concat(...buckets);
	}

	return array;
}

function placeElementsInNumberBuckets(array, index) {
	//create 19 buckets (1 for each digit from -9 to +9)
	const buckets = new Array(19).fill(null).map(() => []);

	//put number into the index corresponding to its digit
	array.forEach((num) => {
		const currentDigit = getDigit(num, index);
		buckets[currentDigit + 9].push(num); //offset to make -9 index 0
	});

	return buckets;
}

//find the length of the longest digit in the array
function determineNumPasses(array) {
	let maxDigitLength = 0;
	for (let i = 0; i < array.length; i++) {
		let digitLength = countDigits(array[i]);
		if (digitLength > maxDigitLength) maxDigitLength = digitLength;
	}
	return maxDigitLength;
}

//get a digit at the specified index
function getDigit(num, i) {
	let digitCount = countDigits(num);
	if (i < 0 || i > digitCount - 1) return 0;
	let sign = num < 0 ? -1 : 1;
	return Math.floor((Math.abs(num) / 10 ** i) % 10) * sign;
}

//count the number of whole digits in a number
function countDigits(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = radixSort;
