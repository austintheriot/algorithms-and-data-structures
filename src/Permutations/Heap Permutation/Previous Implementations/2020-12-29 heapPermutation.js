function swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

export default function getPermutations(arr) {
	//SHOULD manipulate original array
	function generate(n, arr, answerArr) {
		if (n === 1) {
			answerArr.push(arr.slice());
			return;
		}

		generate(n - 1, arr, answerArr);

		for (let i = 0; i < n - 1; i++) {
			if (n % 2 === 0) swap(arr, i, n - 1);
			else swap(arr, 0, n - 1);
			generate(n - 1, arr, answerArr);
		}

		return answerArr;
	}

	//run function
	const answer = [];
	generate(arr.length, arr, answer);
	return answer;
}
