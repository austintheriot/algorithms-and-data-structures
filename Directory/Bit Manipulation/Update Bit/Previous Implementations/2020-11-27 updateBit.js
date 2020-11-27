module.exports = function updateBit(num, i, bit) {
	return (~(1 << i) & num) | (bit << i);
};
