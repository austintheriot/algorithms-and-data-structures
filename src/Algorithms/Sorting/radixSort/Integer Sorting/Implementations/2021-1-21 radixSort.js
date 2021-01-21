import countDigits from '../../../Numbers & Math/countDigits/countDigits.solution';
import getDigit from '../../../Numbers & Math/getDigit/getDigit.solution';

export default function radixSort(array) {
	//determine number of passes needed
	const passes = numberOfPasses(array);
	//sort into buckets based on digits place of pass
	for (let i = 0; i < passes; i++) {
		const buckets = sortIntoBuckets(array, i);
		array = buckets.flat(1);
	}
	return array;
}

const sortIntoBuckets = (array, place) => {
	const NUMBER_OF_POSSIBLE_INTEGERS = 19;
	const buckets = new Array(NUMBER_OF_POSSIBLE_INTEGERS)
		.fill(null)
		.map(() => []);

	for (let i = 0; i < array.length; i++) {
		const number = array[i];
		const digit = getDigit(number, place);
		buckets[digit + 9].push(number);
	}
	return buckets;
};

const numberOfPasses = (array) => {
	return array.reduce((a, b) => Math.max(a, countDigits(b)), 0);
};
