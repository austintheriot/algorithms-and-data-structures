const shuffle = require('./fisherYatesShuffle');

describe('Fisher-Yates Shuffle', () => {
	it('Should shuffle an array', () => {
		let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
		let arrayCopy = [...array];
		expect(shuffle(array)).not.toEqual(arrayCopy);
	});

	it('Should modifiy the original array', () => {
		let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
		const shuffledArray = shuffle(array);
		expect(shuffledArray).toBe(array);
	});
});
