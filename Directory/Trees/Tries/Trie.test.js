const Trie = require('./Trie');

describe('Trie', () => {
	it('Should create an empty root node', () => {
		const trie = new Trie();
		expect(trie.root.value).toBe(null);
		expect(trie.root.numberOfChildWords).toBe(0);
		expect(trie.root.children).toEqual({});
		expect(trie.root.isCompleteWord).toBe(false);
	});

	describe('getNode()', () => {
		it('Should return node corresponding to last character', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			let currentNode = trie.root;
			currentNode = currentNode.children['h'];
			currentNode = currentNode.children['e'];
			currentNode = currentNode.children['l'];
			expect(trie.getNode('hel')).toBe(currentNode);
		});

		it('Should return undefined for nonexistent nodes', () => {
			const trie = new Trie();
			trie.add('hello');

			expect(trie.getNode('goodbye')).toBe(undefined);
		});
	});

	describe('add()', () => {
		it('Should add node to children {} for each character node in Trie', () => {
			const trie = new Trie();
			trie.add('hello');

			//Root
			let currentNode = trie.root;
			expect('h' in currentNode.children).toBe(true);

			//h
			currentNode = currentNode.children['h'];
			expect('e' in currentNode.children).toBe(true);

			//e
			currentNode = currentNode.children['e'];
			expect('l' in currentNode.children).toBe(true);

			//l
			currentNode = currentNode.children['l'];
			expect('l' in currentNode.children).toBe(true);

			//l
			currentNode = currentNode.children['l'];
			expect('o' in currentNode.children).toBe(true);

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.children).toEqual({});
		});

		it('Should add set value as character for each character node in Trie', () => {
			const trie = new Trie();
			trie.add('hello');

			//Root
			let currentNode = trie.root;
			expect(currentNode.value).toBe(null);

			//h
			currentNode = currentNode.children['h'];
			expect(currentNode.value).toBe('h');

			//e
			currentNode = currentNode.children['e'];
			expect(currentNode.value).toBe('e');

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.value).toBe('l');

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.value).toBe('l');

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.value).toBe('o');
		});

		it('Should add increment the word count of each character node touched', () => {
			const trie = new Trie();
			trie.add('hello');

			//Root
			let currentNode = trie.root;
			expect(currentNode.numberOfChildWords).toBe(1);

			//h
			currentNode = currentNode.children['h'];
			expect(currentNode.numberOfChildWords).toBe(1);

			//e
			currentNode = currentNode.children['e'];
			expect(currentNode.numberOfChildWords).toBe(1);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.numberOfChildWords).toBe(1);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.numberOfChildWords).toBe(1);

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.numberOfChildWords).toBe(1);
		});

		it('Should not set isCompleteWord to true for non-final letters', () => {
			const trie = new Trie();
			trie.add('hello');

			//Root
			let currentNode = trie.root;
			expect(currentNode.isCompleteWord).toBe(false);

			//h
			currentNode = currentNode.children['h'];
			expect(currentNode.isCompleteWord).toBe(false);

			//e
			currentNode = currentNode.children['e'];
			expect(currentNode.isCompleteWord).toBe(false);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.isCompleteWord).toBe(false);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.isCompleteWord).toBe(false);
		});

		it('Should add set isCompleteWord to true for the final letter', () => {
			const trie = new Trie();
			trie.add('hello');

			//Root
			let currentNode = trie.root;
			//h
			currentNode = currentNode.children['h'];
			//e
			currentNode = currentNode.children['e'];
			//l
			currentNode = currentNode.children['l'];
			//l
			currentNode = currentNode.children['l'];
			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.isCompleteWord).toBe(true);
		});

		it('Should handle multiple words', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			//HELLO
			//Root
			let currentNode = trie.root;
			expect(currentNode.value).toBe(null);
			expect('h' in currentNode.children).toBe(true);
			expect(currentNode.numberOfChildWords).toBe(2);
			expect(currentNode.isCompleteWord).toBe(false);

			//h
			currentNode = currentNode.children['h'];
			expect(currentNode.value).toBe('h');
			expect('e' in currentNode.children).toBe(true);
			expect(currentNode.numberOfChildWords).toBe(2);
			expect(currentNode.isCompleteWord).toBe(false);

			//e
			currentNode = currentNode.children['e'];
			expect(currentNode.value).toBe('e');
			expect('l' in currentNode.children).toBe(true);
			expect(currentNode.numberOfChildWords).toBe(2);
			expect(currentNode.isCompleteWord).toBe(false);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.value).toBe('l');
			expect('l' in currentNode.children).toBe(true);
			expect(currentNode.numberOfChildWords).toBe(2);
			expect(currentNode.isCompleteWord).toBe(false);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.value).toBe('l');
			expect('o' in currentNode.children).toBe(true);
			expect(currentNode.numberOfChildWords).toBe(1);
			expect(currentNode.isCompleteWord).toBe(false);

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.value).toBe('o');
			expect(currentNode.children).toEqual({});
			expect(currentNode.numberOfChildWords).toBe(1);
			expect(currentNode.isCompleteWord).toBe(true);

			//HELP
			//root
			currentNode = trie.root;
			//h
			currentNode = currentNode.children['h'];
			//e
			currentNode = currentNode.children['e'];
			//l
			currentNode = currentNode.children['l'];
			//p
			currentNode = currentNode.children['p'];
			expect(currentNode.value).toBe('p');
			expect(currentNode.children).toEqual({});
			expect(currentNode.numberOfChildWords).toBe(1);
			expect(currentNode.isCompleteWord).toBe(true);
		});

		it('Should not increment word counts on duplicate words', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('hello');
			trie.add('hello');
			trie.add('hello');
			trie.add('hello');

			let currentNode = trie.root;
			expect(currentNode.numberOfChildWords).toBe(1);
		});
	});

	describe('isPrefix()', () => {
		it('Should return true if string is a valid prefix in the trie', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			expect(trie.isPrefix('h')).toBe(true);
			expect(trie.isPrefix('he')).toBe(true);
			expect(trie.isPrefix('hel')).toBe(true);
			expect(trie.isPrefix('help')).toBe(true);
			expect(trie.isPrefix('hell')).toBe(true);
			expect(trie.isPrefix('hello')).toBe(true);
		});

		it('Should return false if string is not a valid prefix in the trie', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			expect(trie.isPrefix('hl')).toBe(false);
			expect(trie.isPrefix('hep')).toBe(false);
			expect(trie.isPrefix('hepl')).toBe(false);
			expect(trie.isPrefix('heoll')).toBe(false);
		});
	});

	describe('isWord()', () => {
		it('Should return true if string is a valid word in the trie', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			expect(trie.isWord('hello')).toBe(true);
			expect(trie.isWord('help')).toBe(true);
		});

		it('Should return false if string is not a valid word in the trie', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			expect(trie.isWord('hel')).toBe(false);
			expect(trie.isWord('he')).toBe(false);
			expect(trie.isWord('goodbye')).toBe(false);
		});
	});

	describe('howManyWordsStartWith()', () => {
		it('Should return the number of words that start with that prefix', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');
			trie.add('heliotrope');
			trie.add('pizza');

			expect(trie.howManyWordsStartWith('p')).toBe(1);
			expect(trie.howManyWordsStartWith('h')).toBe(3);
			expect(trie.howManyWordsStartWith('he')).toBe(3);
			expect(trie.howManyWordsStartWith('hel')).toBe(3);
			expect(trie.howManyWordsStartWith('heli')).toBe(1);
			expect(trie.howManyWordsStartWith('help')).toBe(1);
			expect(trie.howManyWordsStartWith('hell')).toBe(1);
			expect(trie.howManyWordsStartWith('q')).toBe(0);
			expect(trie.howManyWordsStartWith('r')).toBe(0);
			expect(trie.howManyWordsStartWith('z')).toBe(0);
		});

		it('Should return false if string is not a valid word in the trie', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			expect(trie.isWord('hel')).toBe(false);
			expect(trie.isWord('he')).toBe(false);
			expect(trie.isWord('goodbye')).toBe(false);
		});
	});

	describe('longestStringLength()', () => {
		it('Should return the max depth of nodes in the trie', () => {
			let trie = new Trie();
			trie.add('hello');
			trie.add('help');
			trie.add('heliotrope'); //10
			trie.add('pizza');
			expect(trie.longestStringLength()).toBe(10);

			trie = new Trie();
			trie.add('hello');
			trie.add('goodbye');
			trie.add('zyxwvutsrqponmlkjihgfedcba'); //26
			trie.add('abcdefg');
			expect(trie.longestStringLength()).toBe(26);
		});
	});
});
