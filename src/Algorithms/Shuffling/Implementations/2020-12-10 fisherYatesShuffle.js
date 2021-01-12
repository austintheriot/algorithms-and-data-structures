//should modify the original array
module.exports = function fisherYatesShuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		// i <= j <= finalIndex
		let j = Math.floor(i + Math.random() * (arr.length - i));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};
