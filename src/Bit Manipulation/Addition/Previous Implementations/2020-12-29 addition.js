module.exports = function addition(num1, num2) {
	const sum = num1 ^ num2;
	const carry = (num1 & num2) << 1;
	return carry === 0 ? sum : addition(sum, carry);
};
