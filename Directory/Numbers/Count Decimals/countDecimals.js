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

module.exports = countDecimals;
