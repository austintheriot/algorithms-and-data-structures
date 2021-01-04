function countDigits(num) {
	return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = function getDigit(num, i) {
	if (i < 0 || i > countDigits(num) - 1) return 0;
	let sign = num < 0 ? -1 : 1;
	return Math.floor((Math.abs(num) / 10 ** i) % 10) * sign;
};
