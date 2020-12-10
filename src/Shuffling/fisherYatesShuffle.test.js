const shuffle = require('./fisherYatesShuffle');
const shufflingUtils = require('../../utils/shufflingUtils');

describe('Fisher-Yates Shuffle', () => {
	it('Should shuffle an array', () => {
		let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
		let arrayCopy = [...array];
		expect(shuffle(array)).not.toEqual(arrayCopy);
	});

	it('Should shuffle in place (modify the original array)', () => {
		let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
		const shuffledArray = shuffle(array);
		expect(shuffledArray).toBe(array);
	});

	it('Should produce an even distribution of randomness', () => {
		shufflingUtils.assertEvenDistribution(shuffle);
	});
});
