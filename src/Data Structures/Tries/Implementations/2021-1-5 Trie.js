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
			if (currentNode.children[ch] == undefined) return undefined;
			currentNode = currentNode.children[ch];
		}
		return currentNode;
	}

	add(string) {
		const node = this.getNode(string);
		if (node && node.isCompleteWord) return this;
		let currentNode = this.root;
		currentNode.numberOfChildWords++;
		currentNode.maxDepth = Math.max(currentNode.maxDepth, string.length);

		for (let i = 0; i < string.length; i++) {
			const ch = string[i];
			if (currentNode.children[ch] == undefined) {
				currentNode.children[ch] = new Node(ch);
			}
			currentNode = currentNode.children[ch];
			currentNode.numberOfChildWords++;
			currentNode.maxDepth = Math.max(
				currentNode.maxDepth,
				string.slice(i).length
			);
		}
		currentNode.isCompleteWord = true;
		return this;
	}

	isPrefix(string) {
		return !!this.getNode(string);
	}

	isWord(string) {
		return !!this.getNode(string)?.isCompleteWord;
	}

	howManyWordsStartWith(string) {
		return this.getNode(string)?.numberOfChildWords ?? 0;
	}

	longestStringLength() {
		return this.root.maxDepth;
	}
}
