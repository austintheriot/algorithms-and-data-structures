//should modify the original array

//i going from 0 --> arr.length - 1
function fisherYatesShuffleAscending(arr) {
	for (let i = 0; i < arr.length; i++) {
		//in order to make all permuations equally likely:
		//j must be a random integer such that i <= j <= arr.length - 1 (INCLUSIVE OF LAST INDEX)

		// :######## EXAMPLE: ########
		// const max = arr.length - i; //get the remaining possible range
		// const min = i; //shift the range upward to be correct
		// const randomIndex = min + Math.random() * max; //get random decimal in proper range
		// const j = Math.floor(randomIndex); //round decial down to an integer (index)

		// ######## This can be shortened to: ########
		// let j = Math.floor(i + Math.random() * (arr.length - i));

		let j = Math.floor(i + Math.random() * (arr.length - i));
		[arr[i], arr[j]] = [arr[j], arr[i]]; //swap i with the random integer
	}
	return arr;
}

//i going from arr.length - 1 --> 1
function fisherYatesShuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		//in order to make all permuations equally likely:
		//j must be a random integer such that 0 ≤ j ≤ i (INCLUSIVE OF I):

		// ######## EXAMPLE: ########
		// let max = arr.length - 1;
		// let min = i;
		// let j = Math.floor(Math.random() * (max - min + 1) + min);

		// ######## This can be shortened to: ########
		// let j = Math.floor(Math.random() * (arr.length - i) + i);

		let j = Math.floor(Math.random() * (arr.length - i) + i);
		[arr[i], arr[j]] = [arr[j], arr[i]]; //swap i with the random integer
	}
	return arr;
}

module.exports = fisherYatesShuffle;
