function isEvenAND(num) {
	return !(num & 1);
}

function isEvenOR(num) {
	return (num | 1) === num + 1;
}

function isEvenXOR(num) {
	return (num ^ 1) > num;
}

module.exports = {
	isEvenAND,
	isEvenOR,
	isEvenXOR,
};
