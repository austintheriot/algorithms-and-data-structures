function swap(a, b, arr) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

//SHOULD manipulate original array
function generate(A, n, permutations) {
	//Escape case
	if (n == 1) {
		//Make a copy at each iteration, since the array is modified in place
		return permutations.push(A.slice());
	}

	for (var i = 0; i !== n; ++i) {
		//Generate permutations with nth unaltered
		//Initially n == length(A)
		generate(A, n - 1, permutations);

		//if even
		if (n % 2 === 0) {
			swap(i, n - 1, A);
		}

		//if odd
		else {
			swap(0, n - 1, A);
		}
	}
}

export default function permutationArr(arr) {
	const permutations = [];
	generate(arr, arr.length, permutations);
	return permutations;
}
