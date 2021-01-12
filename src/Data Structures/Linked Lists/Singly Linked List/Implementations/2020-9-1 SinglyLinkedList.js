//implement a singly linked list with the following functionalities:

//prepend
//get
//find
//delete

//return UNDEFINED for nonexistent values or indexes

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	prepend(data) {
		const newNode = new Node(data, this.head);
		this.head = newNode;
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	find(search) {
		let currentNode = this.head;
		if (typeof search === 'function') {
			const callback = search;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return null;
		} else {
			const value = search;
			while (currentNode) {
				if (currentNode.data === value) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		}
	}

	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;

		//delete head:
		if (index === 0) {
			this.head = this.head.next;
			this.length--;
			return this;
		}

		let currentNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		currentNode.next = currentNode.next.next;
		this.length--;
		return this;
	}
}

module.exports = LinkedList;
