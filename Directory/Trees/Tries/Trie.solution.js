class Node {
	constructor(value) {
		this.value = value || null; //'c'
		this.numberOfChildWords = 0;
		this.children = {}; //{'a': Node}
		this.isCompleteWord = false; //false
		this.maxDepth = 0;
	}
}

// add(string){}
// getNode(string){}
// isPrefix(string){}
// isWord(string){}
// howManyWordsStartWith(string){}
// longestString(){}

module.exports = class Trie {
	constructor() {
		this.root = new Node(); //null root
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

	add(string) {
		//do not duplicate words
		//if node exists, and is already marked as a complete word, end function
		if (this.getNode(string) && this.getNode(string).isCompleteWord)
			return this;
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			let ch = string[i];
			//track the number of child words in each node
			currentNode.numberOfChildWords++;
			//track the maximum depth below each node
			currentNode.maxDepth = Math.max(currentNode.maxDepth, string.length - i);
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

	isPrefix(string) {
		let node = this.getNode(string);
		return node ? true : false;
	}

	isWord(string) {
		let node = this.getNode(string);
		return node ? node.isCompleteWord : false;
	}

	howManyWordsStartWith(string) {
		let node = this.getNode(string);
		return node ? node.numberOfChildWords : 0;
	}

	longestStringLength() {
		return this.root.maxDepth;
	}
};
