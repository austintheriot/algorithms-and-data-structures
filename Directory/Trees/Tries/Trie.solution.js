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
		//do not duplicate words
		//if node exists, and is already marked as a complete word, end function
		if (this.getNode(string) && this.getNode(string).isCompleteWord)
			return this;
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			let ch = string[i];
			currentNode.numberOfChildWords++;
			if (currentNode.children[ch]) {
				currentNode = currentNode.children[ch];
			} else {
				currentNode.children[ch] = new Node(ch);
				currentNode = currentNode.children[ch];
			}
		}
		currentNode.isCompleteWord = true;
		currentNode.numberOfChildWords++;
	}

	getNode(string) {
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			const ch = string[i];
			if (ch in currentNode.children) {
				currentNode = currentNode.children[ch];
			} else {
				return undefined;
			}
		}
		return currentNode;
	}

	isWord(string) {
		let node = this.getNode(string);
		return node ? node.isCompleteWord : false;
	}
	//isPrefix
};
