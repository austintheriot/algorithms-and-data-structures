//should modify the original array
module.exports = function fisherYatesShuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		let randomIndex = Math.floor(i + Math.random() * (arr.length - i));
		[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
	}
	return arr;
};
