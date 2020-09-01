const Trie = require('./Trie.solution');

describe('Trie', () => {
	test('Should create an empty root node', () => {
		const trie = new Trie();
		expect(trie.root.value).toBe(null);
		expect(trie.root.numberOfChildWords).toBe(0);
		expect(trie.root.children).toEqual({});
		expect(trie.root.isCompleteWord).toBe(false);
	});

	describe('add()', () => {
		test('Should add nodes for each character to Trie', () => {
			const trie = new Trie();
			trie.add('hello');

			//Root
			let currentNode = trie.root;
			expect(currentNode.value).toBe(null);
			expect('h' in currentNode.children).toBe(true);
			expect(currentNode.isCompleteWord).toBe(false);

			//h
			currentNode = currentNode.children['h'];
			expect(currentNode.value).toBe('h');
			expect('e' in currentNode.children).toBe(true);
			expect(currentNode.isCompleteWord).toBe(false);

			//e
			currentNode = currentNode.children['e'];
			expect(currentNode.value).toBe('e');
			expect('l' in currentNode.children).toBe(true);
			expect(currentNode.isCompleteWord).toBe(false);

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.value).toBe('l');
			expect('o' in currentNode.children).toBe(true);
			expect(currentNode.isCompleteWord).toBe(false);

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.value).toBe('o');
			expect(currentNode.children).toEqual({});
			expect(currentNode.isCompleteWord).toBe(true);
		});

		test('Should add increment the word count of each character node touched', () => {
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

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.numberOfChildWords).toBe(1);
		});

		test('Should not set isCompleteWord to true for non-final letters', () => {
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
		});

		test('Should add set isCompleteWord to true for the final letter', () => {
			//Root
			let currentNode = trie.root;
			//h
			currentNode = currentNode.children['h'];
			//e
			currentNode = currentNode.children['e'];
			//l
			currentNode = currentNode.children['l'];
			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.isCompleteWord).toBe(true);
		});
	});
});
