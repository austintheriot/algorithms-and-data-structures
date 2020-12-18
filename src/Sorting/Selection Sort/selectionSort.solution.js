export default (array) => {
	//Create a starting point that iterates through array
	for (let i = 0; i < array.length; i++) {
		let minNumIndex = i;

		//Find minimum element
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minNumIndex]) minNumIndex = j;
		}

		//swap minimum index with the outer index
		if (minNumIndex !== i) {
			[array[i], array[minNumIndex]] = [array[minNumIndex], array[i]];
		}
	}
	return array;
};
