function swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

export default function getPermutations(arr) {
	function generate(arr, n, answer) {
		if (n === 1) {
			answer.push(arr.slice());
			return;
		}

		generate(arr, n - 1, answer);

		for (let i = 0; i < n - 1; i++) {
			if (n % 2 === 0) swap(arr, i, n - 1);
			else swap(arr, 0, n - 1);
			generate(arr, n - 1, answer);
		}
	}

	const answer = [];
	generate(arr, arr.length, answer);
	return answer;
}
