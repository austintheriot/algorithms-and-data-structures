function swap(a, b, arr) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

//SHOULD manipulate original array
function permutation(arr, n, permutations) {}

export default function permutationArr(arr) {
	const permutations = [];
	permutation(arr, arr.length, permutations);
	return permutations;
}
