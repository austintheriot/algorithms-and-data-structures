module.exports = function getBit(num, i) {
	return (num >> i) & 1;
};
