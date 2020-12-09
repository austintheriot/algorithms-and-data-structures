//should modify the original array
module.exports = function fisherYatesShuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		//in order to make all permuations equally likely:
		//i <= j < arr.length
		const range = arr.length - i; //get the remaining possible range
		const shift = i; //shift the range upward to be correct
		const randomIndex = shift + Math.random() * range; //get random decimal in proper range
		const j = Math.floor(randomIndex); //round decial down to an integer (index)
		[arr[i], arr[j]] = [arr[j], arr[i]]; //swap i with the random integer
	}
	return arr;
};
