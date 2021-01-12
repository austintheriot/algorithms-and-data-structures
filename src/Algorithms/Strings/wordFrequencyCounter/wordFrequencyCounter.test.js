import wordFrequencyCounter from './wordFrequencyCounter';
const fs = require('fs');
const aMidsummerNightsDream = fs.readFileSync(
	'src/General Algorithms/wordFrequencyCounter/aMidsummerNightsDream.txt',
	'utf-8'
);

it('Should count the frequency of words in a text', () => {
	expect(wordFrequencyCounter('the', aMidsummerNightsDream)).toBe(559);
	expect(wordFrequencyCounter('love', aMidsummerNightsDream)).toBe(106);
	expect(wordFrequencyCounter("dismiss'd", aMidsummerNightsDream)).toBe(0);
});
