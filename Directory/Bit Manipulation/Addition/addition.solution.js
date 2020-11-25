module.exports = function addition(num1, num2) {
	//"add" the numbers togethr using XOR
	const sum = num1 ^ num2;
	//create the "carry" by anding them
	const carry = (num1 & num2) << 1;
	//if there is nothing to carry, good to go
	//else, add the new "sum" and the new "carry"
	return !carry ? sum : addition(sum, carry);
};
