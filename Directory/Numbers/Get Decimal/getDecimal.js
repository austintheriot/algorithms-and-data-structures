//Get the ith digit from the right
//return 0 for out of range indixes
//return negative integer for negative numbers

function trimZeroes(num) {
	num = Math.abs(num);
	if (num === 0) return 0;
	while (num % 10 === 0) num /= 10;
	return num;
}

function extractDecimal(num) {
	num = Math.abs(num);
	if (Number.isInteger(num)) return 0;
	let decimalPortion = Math.round(num * 10 ** 15);
	let integerPortion = Math.round(Math.floor(num) * 10 ** 15);
	return trimZeroes(Math.round(decimalPortion - integerPortion));
}

function countDecimals(num) {
	num = Math.abs(num);
	num = extractDecimal(num);
	if (num === 0) return 0;
	const count = Math.floor(Math.log10(Math.abs(num))) + 1;
	return count;
}

function getDecimal(num, i) {
	if (i < 0 || i > countDecimals(num) - 1) return 0;
	const extractedDecimal = extractDecimal(num);
	let sign = num < 0 ? -1 : 1;
	return Math.floor((extractedDecimal / 10 ** i) % 10) * sign;
}

module.exports = getDecimal;
