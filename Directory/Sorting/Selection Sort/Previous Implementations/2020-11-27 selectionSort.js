module.exports = (originalArray) => {
	const array = [...originalArray];
	for (let i = 0; i < array.length; i++) {
		let minimumElementIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minimumElementIndex]) {
				minimumElementIndex = j;
			}
		}
		if (minimumElementIndex !== i) {
			[array[i], array[minimumElementIndex]] = [
				array[minimumElementIndex],
				array[i],
			];
		}
	}
	return array;
};
