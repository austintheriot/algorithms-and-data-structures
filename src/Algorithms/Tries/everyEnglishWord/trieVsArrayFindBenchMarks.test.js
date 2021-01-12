const fs = require('fs');
const Trie = require('../../../Data Structures/Tries/Trie.solution');
const NS_PER_SEC = 1e9;

let englishTrie;
let englishArray;
const getEnglishTrie = () => {
	console.log('Loading english tree');
	return new Promise((resolve, reject) => {
		fs.readFile(
			'C:/Users/austi/Documents/Code/____Algorithms & Data Structures/directory/Trees/Tries/Algorithms/everyEnglishWord.txt',
			'utf8',
			(err, data) => {
				if (err) throw err;
				//format string
				englishArray = data.split('\n').map((el) => el.trim());
				//init trie
				englishTrie = new Trie();
				//convert array to trie
				englishArray.forEach((el) => englishTrie.add(el));
				resolve(englishTrie);
			}
		);
	});
};

beforeAll(() => {
	return getEnglishTrie();
});

describe('English dictionary', () => {
	it('Array find benchmarks', () => {
		//about 0.43-0.33 milliseconds / lookup
		const time = process.hrtime();
		englishArray.includes('abbreviate');
		englishArray.includes('expend');
		englishArray.includes('wreck');
		englishArray.includes('youthfulness');
		englishArray.includes('yachtsmen');
		englishArray.includes('experimen');
		englishArray.includes('perinatale');
		englishArray.includes('perthe');
		englishArray.includes('perti');
		englishArray.includes('persuasiveenesss');
		englishArray.includes('zooom');
		const diff = process.hrtime(time);
		console.log(
			`Array find took ${
				(diff[0] * NS_PER_SEC + diff[1]) / 10 / 1000000
			} milliseconds / lookup`
		);
	});

	it('Trie benchmarks', () => {
		//about 0.00802-0.0045 milliseconds / lookup
		const time = process.hrtime();
		englishTrie.isWord('abbreviate');
		englishTrie.isWord('expend');
		englishTrie.isWord('wreck');
		englishTrie.isWord('youthfulness');
		englishTrie.isWord('yachtsmen');
		englishTrie.isWord('experimen');
		englishTrie.isWord('perinatale');
		englishTrie.isWord('perthe');
		englishTrie.isWord('perti');
		englishTrie.isWord('persuasiveenesss');
		englishTrie.isWord('zooom');
		const diff = process.hrtime(time);
		console.log(
			`Trie lookup took ${
				(diff[0] * NS_PER_SEC + diff[1]) / 10 / 1000000
			} milliseconds / lookup`
		);
	});

	it('Should return true for valid words and false for invalid words', () => {
		expect(englishTrie.isWord('abbreviate')).toBe(true);
		expect(englishTrie.isWord('expend')).toBe(true);
		expect(englishTrie.isWord('wreck')).toBe(true);
		expect(englishTrie.isWord('youthfulness')).toBe(true);
		expect(englishTrie.isWord('yachtsmen')).toBe(true);
		expect(englishTrie.isWord('zimbabwe')).toBe(true);
	});

	it('Should return false for invalid', () => {
		expect(englishTrie.isWord('experimen')).toBe(false);
		expect(englishTrie.isWord('perinatale')).toBe(false);
		expect(englishTrie.isWord('perthe')).toBe(false);
		expect(englishTrie.isWord('perti')).toBe(false);
		expect(englishTrie.isWord('persuasiveenesss')).toBe(false);
		expect(englishTrie.isWord('zooom')).toBe(false);
	});

	it('Should return true for valid prefixes', () => {
		expect(englishTrie.isPrefix('abbreviate')).toBe(true);
		expect(englishTrie.isPrefix('expend')).toBe(true);
		expect(englishTrie.isPrefix('wreck')).toBe(true);
		expect(englishTrie.isPrefix('youthfulness')).toBe(true);
		expect(englishTrie.isPrefix('yachtsmen')).toBe(true);
		expect(englishTrie.isPrefix('zimbabwe')).toBe(true);
	});

	it('Should return false for invalid prefixes', () => {
		expect(englishTrie.isPrefix('abbreviate')).toBe(true);
		expect(englishTrie.isPrefix('expend')).toBe(true);
		expect(englishTrie.isPrefix('wreck')).toBe(true);
		expect(englishTrie.isPrefix('youthfulness')).toBe(true);
		expect(englishTrie.isPrefix('yachtsmen')).toBe(true);
		expect(englishTrie.isPrefix('zimbabwe')).toBe(true);
	});
});
