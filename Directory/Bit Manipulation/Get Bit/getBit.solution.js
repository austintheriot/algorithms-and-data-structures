//Method 1 - returns 1 or 0
module.exports = getBit = (number, i) => {
	return (number >> i) & 1;
};

//Method 2 - return true or false
getBitAlt = (number, i) => {
	return (number & (1 << i)) != 0;
};
