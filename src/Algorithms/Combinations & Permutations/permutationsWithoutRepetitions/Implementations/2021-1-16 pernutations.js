/* 

  Generate every possible permutation of a string without duplicates.

*/

export default function getPermutations(string) {
	const permutations = [];

	if (string.length === 0) {
		permutations.push('');
		return permutations;
	}

	const first = string[0];
	const remainder = string.slice(1);
	const words = getPermutations(remainder);
	for (let word of words) {
		for (let i = 0; i <= word.length; i++) {
			permutations.push(word.slice(0, i) + first + word.slice(i));
		}
	}

	return permutations;
}
