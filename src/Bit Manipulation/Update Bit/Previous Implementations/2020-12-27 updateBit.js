module.exports = function updateBit(num, i, bit) {
	//clear the bit
	//update bit

	return (num & ~(1 << i)) | (bit << i);
};
