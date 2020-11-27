function isEvenAND(num) {
	return !(num & 1);
}

function isEvenOR(num) {
	return (num | 1) > num;
}

function isEvenXOR(num) {
	return (num ^ 1) === num + 1;
}

module.exports = {
	isEvenAND,
	isEvenOR,
	isEvenXOR,
};
