function radixSort(array) {}

//helper functions

function getDigit(num, i) {
	let digitCount = countDigits(num);
	if (i < 0 || i > digitCount - 1) return 0;
	let sign = num < 0 ? -1 : 1;
	return Math.floor((Math.abs(num) / 10 ** i) % 10) * sign;
}

function countDigits(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = radixSort;
