function swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

export default function getPermutations(arr) {
	//SHOULD manipulate original array
	function generate(n, arr, answerArr) {
		//recursive escape case
		if (n === 1) {
			answerArr.push(arr.slice());
			return;
		}

		//generate permutations with nth unaltered
		//initially n == length(A)
		generate(n - 1, arr, answerArr);

		for (let i = 0; i < n - 1; i++) {
			//if even
			if (n % 2 === 0) swap(arr, i, n - 1);
			//if odd
			else swap(arr, 0, n - 1);
			//generate permutation with newly swapped array
			generate(n - 1, arr, answerArr);
		}

		return answerArr;
	}

	//run function
	const answer = [];
	generate(arr.length, arr, answer);
	return answer;
}
