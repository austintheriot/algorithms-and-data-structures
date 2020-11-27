module.exports = (originalArray) => {
	const array = [...originalArray];
	let sorted;
	do {
		sorted = true;
		for (let i = 1; i < array.length; i++) {
			if (array[i] < array[i - 1]) {
				sorted = false;
				[array[i], array[i - 1]] = [array[i - 1], array[i]];
			}
		}
	} while (!sorted);
	return array;
};
