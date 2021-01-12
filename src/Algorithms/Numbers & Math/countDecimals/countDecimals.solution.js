function extractDecimal(num) {
	//already guaranteed to be a decimal by earlier integer check
	return Number(num.toString().split('.').pop());
}

export default function countDecimals(num) {
	//no need to check integer for decimals
	if (Number.isInteger(num)) return 0;
	//get any numbers after the decimal point
	const extractedDecimal = extractDecimal(num);
	//count the number of digits
	return Math.floor(Math.log10(extractedDecimal)) + 1;
}
