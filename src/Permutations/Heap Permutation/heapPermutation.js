function swap(a, b, arr) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

function generate(arr, n, permutations) {}

export default function permutationArr(arr) {
	const permutations = [];
	generate(arr, arr.length, permutations);
	return permutations;
}
