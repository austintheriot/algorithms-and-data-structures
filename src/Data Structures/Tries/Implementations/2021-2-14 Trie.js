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
		let current = this.root;
		for (let i = 0; i < string.length; i++){
			const ch = string[i];
			if (!current.children[ch]) return undefined;
			else current = current.children[ch];
		}
		return current;
	}
	add(string) {
		const node = this.getNode(string);
		if (node && node.isCompleteWord) return this;
		let current = this.root;
		for (let i = 0; i < string.length; i++){
			const ch = string[i];
			current.numberOfChildWords++
			current.maxDepth = Math.max(current.maxDepth, string.slice(i).length);
			if (!current.children[ch]) {
				current.children[ch] = new Node(ch);
			}
			current = current.children[ch];
		}
		current.numberOfChildWords++;
		current.maxDepth = Math.max(current.maxDepth, string.length);
		current.isCompleteWord = true;
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
