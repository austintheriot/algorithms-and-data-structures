module.exports = (originalArray) => {
	const arr = [...originalArray];
	let sorted;
	do {
		sorted = true;
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				sorted = false;
				[arr[i], [arr[i - 1]]] = [arr[i - 1], [arr[i]]];
			}
		}
	} while (!sorted);
	return arr;
};
