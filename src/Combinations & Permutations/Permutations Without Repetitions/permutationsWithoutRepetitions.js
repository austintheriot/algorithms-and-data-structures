/* 

  Generate every possible permutation of a string without duplicates.

*/

//iterative solution
function iterativePermutations(characterArray) {
	let combinations = [characterArray[0]];
	let count = 0;

	//character to insert
	for (let i = 1; i < characterArray.length; i++) {
		const newCominbations = [];
		const ch = characterArray[i];

		//existing combinations
		for (let j = 0; j < combinations.length; j++) {
			const string = combinations[j];

			//insert into existing string
			for (let k = 0; k < string.length + 1; k++) {
				newCominbations.push(string.slice(0, k) + ch + string.slice(k));
				count++;
			}
		}

		combinations = newCominbations;
	}

	return combinations;
}

//recursive solution
export default function recursivePermutations(string) {
	const permutations = [];

	//base case
	if (string.length === 0) {
		permutations.push('');
		return permutations;
	}

	const first = string[0]; //get first character
	const remainder = string.slice(1); //remove first character
	const words = recursivePermutations(remainder); //get combinations for substrings

	//iterate through each substring
	for (let word of words) {
		//insert character at every index
		for (let i = 0; i <= word.length; i++) {
			const s = word.slice(0, i) + first + word.slice(i);
			permutations.push(s);
		}
	}

	return permutations;
}
