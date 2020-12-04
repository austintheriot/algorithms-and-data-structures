//Get the ith digit from the right
module.exports = function getDigit(num, i) {
	//Example
	//4321 -- getting the 1st index
	//num / 10**1 -----> num / 10 ----> 432.1
	//num % 10 ----> 2.1
	//Math.floor(num) ---> 2
	return Math.floor((Math.abs(num) / 10 ** i) % 10);
};
