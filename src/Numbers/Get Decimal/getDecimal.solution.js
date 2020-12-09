//Get the ith digit from the right
//return 0 for out of range indixes
//return negative integer for negative numbers

function extractDecimal(num) {
	//extract the stuff after the decimal
	num = Number(num.toPrecision(16).toString().split('.').pop());
	//trim off any extra zeroes
	while (num % 10 === 0) {
		num /= 10;
	}
	return num;
}

function countDecimals(num) {
	//no need to check integer for decimals
	if (Number.isInteger(num)) return 0;
	//get any numbers after the decimal point
	const extractedDecimal = extractDecimal(Math.abs(num));
	//count the number of digits
	return Math.floor(Math.log10(extractedDecimal)) + 1;
}

function getDecimal(num, i) {
	if (i < 0 || i > countDecimals(num) - 1) return 0;
	const extractedDecimal = extractDecimal(num);
	let sign = num < 0 ? -1 : 1;
	return Math.floor((extractedDecimal / 10 ** i) % 10) * sign;
}

module.exports = getDecimal;
