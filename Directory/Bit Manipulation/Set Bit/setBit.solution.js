module.exports = setBit = (number, i) => {
	return number | (1 << i);
};
