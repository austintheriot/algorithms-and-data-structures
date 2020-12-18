export default (arr) => {
	//iterate through the array
	//find min element
	//swap min element with outer index

	for (let i = 0; i < arr.length; i++) {
		const min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
};
