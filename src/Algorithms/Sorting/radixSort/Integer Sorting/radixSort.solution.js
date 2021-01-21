import countDigits from '../../../Numbers & Math/countDigits/countDigits.solution';
import getDigit from '../../../Numbers & Math/getDigit/getDigit.solution';

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
		array = buckets.flat(1);
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
const determineNumPasses = (array) => {
	return array.reduce((a, b) => Math.max(a, countDigits(b)), 0);
};

module.exports = radixSort;
