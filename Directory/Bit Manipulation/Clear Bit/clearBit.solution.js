module.exports = clearBit = (number, i) => {
	return number & ~(1 << i);
};
