module.exports = (originalArray) => {
	const array = [...originalArray];
	let startingIndex = 0;
	while (startingIndex < array.length - 1) {
		let smallestNumber = Infinity;
		let smallestNumberIndex = -1;
		for (let i = startingIndex; i < array.length; i++) {
			if (array[i] < smallestNumber) {
				smallestNumber = array[i];
				smallestNumberIndex = i;
			}
		}
		[array[startingIndex], array[smallestNumberIndex]] = [
			array[smallestNumberIndex],
			array[startingIndex],
		];
		startingIndex++;
	}
	return array;
};
