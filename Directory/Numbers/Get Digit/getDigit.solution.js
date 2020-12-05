//Get the ith digit from the right
//return 0 for out of range indixes

function countDigits(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = function getDigit(num, i) {
	//return 0 for out of range indixes
	let digitCount = countDigits(num);
	if (i < 0 || i > digitCount - 1) return 0;

	//Example
	//4321 -- getting the 1st index
	//num / 10**1 -----> num / 10 ----> 432.1
	//num % 10 ----> 2.1
	//Math.floor(num) ---> 2
	let sign = num < 0 ? -1 : 1; //makes it work for negative numbers too
	return Math.floor((Math.abs(num) / 10 ** i) % 10) * sign;
};
