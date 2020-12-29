function swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

export default function getPermutations(arr) {
	//SHOULD manipulate original array
	function generate(n, arr, answerArr) {}

	//run function
	const answer = [];
	generate(arr.length, arr, answer);
	return answer;
}
