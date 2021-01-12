module.exports = function subtraction(num1, num2) {
	const difference = num1 ^ num2;
	const borrow = (~num1 & num2) << 1;
	return num2 === 0 ? num1 : subtraction(difference, borrow);
};
