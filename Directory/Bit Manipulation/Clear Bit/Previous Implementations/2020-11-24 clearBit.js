module.exports = function clearBit(num, i) {
	return num & ~(1 << i);
};
