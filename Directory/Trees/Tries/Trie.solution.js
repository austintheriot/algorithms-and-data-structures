class Node {
	constructor(value) {
		this.value = value || null; //'c'
		this.numberOfChildWords = 0;
		this.children = {}; //{'a': Node}
		this.isCompleteWord = false; //false
	}
}

//add(string), add word to Trie
//findWordCount(string), find the number of complete words with that string
//getNode(string), get node of last string value

module.exports = class Trie {
	constructor() {
		this.root = new Node(); //null root
	}

	add(string) {
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			currentNode.numberOfChildWords++;
			let ch = string[i];
			if (currentNode.children[ch]) {
				currentNode = currentNode.children[ch];
			} else {
				currentNode.children[ch] = new Node(ch);
				currentNode = currentNode.children[ch];
			}
		}
		currentNode.isCompleteWord = true;
	}
};
