function swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

export default function getPermutations(arr) {
	function generate(n, arr, final) {
		if (n === 1) {
			final.push(arr.slice());
		} else {
			generate(n - 1, arr, final);
			for (let i = 0; i < n - 1; i++) {
				if (n % 2 === 0) swap(arr, i, n - 1);
				else swap(arr, 0, n - 1);
				generate(n - 1, arr, final);
			}
		}
	}

	const final = [];
	generate(arr.length, arr, final);
	return final;
}
