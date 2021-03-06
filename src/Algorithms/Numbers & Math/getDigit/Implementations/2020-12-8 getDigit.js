//Get the ith digit from the right
//return 0 for out of range indixes
//return negative integer for negative numbers

function countDigits(num) {
	return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = function getDigit(num, i) {
	if (i < 0 || i > countDigits(num) - 1) return 0;
	let sign = num < 0 ? -1 : 1;
	return Math.floor((num / 10 ** i) % 10) * sign;
};
