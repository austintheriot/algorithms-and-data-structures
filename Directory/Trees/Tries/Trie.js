// Implement a tree with the following functionalities:

/* Node data:
      value: string | null
      numberOfChildWords: number
      children = {
      [index: string]: Node;
      }
      isCompleteWord: boolean
      maxDepth: boolean;
*/

// getNode(string){}
// add(string){}
// isPrefix(string){}
// isWord(string){}
// howManyWordsStartWith(string){}
// longestString(){}

class Node {
	constructor(value) {
		this.value = value || null;
		this.numberOfChildWords = 0;
		this.children = {};
		this.isCompleteWord = false;
		this.maxDepth = 0;
	}
}

module.exports = class Trie {
	constructor() {
		this.root = new Node();
	}

	getNode(string) {
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			let ch = string[i];
			if (currentNode.children[ch]) {
				currentNode = currentNode.children[ch];
			} else {
				return undefined;
			}
		}
		return currentNode;
	}

	add(string) {
		if (this.getNode(string) && this.getNode(string).isCompleteWord)
			return this;
		let currentNode = this.root;
		for (let i = 0; i < string.length; i++) {
			const ch = string[i];
			currentNode.numberOfChildWords++;
			currentNode.maxDepth = Math.max(currentNode.maxDepth, string.length);
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
		return this.getNode(string) ? true : false;
	}
	isWord(string) {
		return this.getNode(string) ? this.getNode(string).isCompleteWord : false;
	}
	howManyWordsStartWith(string) {
		return this.getNode(string) ? this.getNode(string).numberOfChildWords : 0;
	}
	longestStringLength() {
		return this.root.maxDepth;
	}
};
