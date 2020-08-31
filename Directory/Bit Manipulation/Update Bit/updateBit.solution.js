module.exports = updateBit = (num, i, bit) => {
	//clear bit, then set to indicated bit value
	return (num & ~(1 << i)) | (bit << i);
};
