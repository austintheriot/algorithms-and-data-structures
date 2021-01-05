// Implement a tree with the following functionalities:

//return UNDEFINED for nonexistent nodes

// getNode(string){}
// add(string){}
// isPrefix(string){}
// isWord(string){}
// howManyWordsStartWith(string){}
// longestStringLength(){}

class Node {
	constructor(value) {
		this.value = value ?? null;
		this.numberOfChildWords = 0;
		this.children = {};
		this.isCompleteWord = false;
		this.maxDepth = 0;
	}
}

export default class Trie {
	constructor() {
		this.root = new Node();
	}
	getNode(string) {
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			const ch = string[i];
			if (currentNode.children[ch] == null) return undefined;
			else currentNode = currentNode.children[ch];
		}
		return currentNode;
	}

	add(string) {
		if (this.getNode(string)?.isCompleteWord) return this;
		let currentNode = this.root;
		currentNode.maxDepth = Math.max(currentNode.maxDepth, string.length);
		for (let i = 0; i < string.length; i++) {
			const ch = string[i];
			if (currentNode.children[ch] == null) {
				currentNode.children[ch] = new Node(ch);
			}
			currentNode.numberOfChildWords++;
			currentNode = currentNode.children[ch];
		}
		currentNode.numberOfChildWords++;
		currentNode.isCompleteWord = true;
		return this;
	}

	isPrefix(string) {
		return this.getNode(string) == undefined ? false : true;
	}
	isWord(string) {
		const node = this.getNode(string);
		if (node == undefined) return false;
		return node.isCompleteWord;
	}
	howManyWordsStartWith(string) {
		return this.getNode(string)?.numberOfChildWords ?? 0;
	}
	longestStringLength() {
		return this.root.maxDepth;
	}
}
