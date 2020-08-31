module.exports = setBit = (num, i) => {
	return num | (1 << i);
};
