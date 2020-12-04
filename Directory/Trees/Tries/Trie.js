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

module.exports = class Trie {};
