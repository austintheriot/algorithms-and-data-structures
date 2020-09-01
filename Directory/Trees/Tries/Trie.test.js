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
		test('Should add node to children {} for each character node in Trie', () => {
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

		test('Should add set value as character for each character node in Trie', () => {
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

			//l
			currentNode = currentNode.children['l'];
			expect(currentNode.numberOfChildWords).toBe(1);

			//o
			currentNode = currentNode.children['o'];
			expect(currentNode.numberOfChildWords).toBe(1);
		});

		test('Should not set isCompleteWord to true for non-final letters', () => {
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

		test('Should add set isCompleteWord to true for the final letter', () => {
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

		test('Should not increment word counts on duplicate words', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('hello');
			trie.add('hello');
			trie.add('hello');
			trie.add('hello');

			let currentNode = trie.root;
			expect(currentNode.numberOfChildWords).toBe(1);
		});

		test('Should handle multiple words', () => {
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
	});

	describe('getNode()', () => {
		test('Should return node corresponding to last character', () => {
			const trie = new Trie();
			trie.add('hello');
			trie.add('help');

			let currentNode = trie.root;
			currentNode = currentNode.children['h'];
			currentNode = currentNode.children['e'];
			currentNode = currentNode.children['l'];
			expect(trie.getNode('hel')).toBe(currentNode);
		});

		test('Should return undefined for nonexistent nodes', () => {
			const trie = new Trie();
			trie.add('hello');

			expect(trie.getNode('goodbye')).toBe(undefined);
		});
	});
});
