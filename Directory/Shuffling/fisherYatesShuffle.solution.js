//should modify the original array
module.exports = function fisherYatesShuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		const j = Math.floor(Math.random() * arr.length);
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};
