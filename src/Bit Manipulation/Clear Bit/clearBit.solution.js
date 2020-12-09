module.exports = clearBit = (num, i) => {
	return num & ~(1 << i);
};
