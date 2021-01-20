export default (array) => {
	do {
		let sorted = true;
		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				sorted = false;
				[array[i - 1], array[i]] = [array[i], array[i - 1]];
			}
		}
	} while (!sorted);
	return array;
};
