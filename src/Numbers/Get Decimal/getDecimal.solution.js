//Get the ith digit from the right
//return 0 for out of range indixes
//return negative integer for negative numbers

function extractDecimal(num) {
	//no need to convert integers
	if (Number.isInteger(num)) return 0;
	return Number(num.toString().split('.').pop());
}

function getDecimal(num, i) {
	//take the only the digits that are to the right of number
	const extractedDecimal = extractDecimal(num);
	//return 0 for indexes out of range
	if (i < 0 || i > extractedDecimal.toString().length - 1) return 0;
	//get digit of decimal * multiply times the sign to return negative/positive integers
	return Math.floor((extractedDecimal / 10 ** i) % 10) * (num < 0 ? -1 : 1);
}

module.exports = getDecimal;
