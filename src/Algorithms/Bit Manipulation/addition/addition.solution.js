module.exports = function addition(num1, num2) {
	//"add" the numbers togethr using XOR
	//this makes 1 + 1 = 0, and the carry integer is handled below
	const sum = num1 ^ num2;
	//create the "carry" by anding them
	//the & creates a 1 where BOTH bits are 1 (where you would need to carry)
	//then left shift by 1 to add in
	const carry = (num1 & num2) << 1;
	//if there is nothing to carry, good to go
	//else, add the new "sum" and the new "carry" together
	return !carry ? sum : addition(sum, carry);
};
