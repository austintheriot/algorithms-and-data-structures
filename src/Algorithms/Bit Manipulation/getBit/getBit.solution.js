//Method 1 - returns 1 or 0
module.exports = getBit = (num, i) => {
	return (num >> i) & 1;
};

//Method 2 - return true or false
getBitAlt = (num, i) => {
	return (num & (1 << i)) != 0;
};
