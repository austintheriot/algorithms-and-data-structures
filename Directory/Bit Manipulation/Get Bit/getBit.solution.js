//Method 1:
module.exports = getBit = (number, i) => {
	return (number >> i) & 1;
};
