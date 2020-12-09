//implement a singly linked list with the following functionalities:

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

	//prepend(data)
	prepend(data) {
		const newNode = new Node(data, this.head);
		this.head = newNode;
		this.length++;
		return this;
	}

	//get(index)
	get(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (index === 0) return this.head;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	//find(data | callback)
	find(search) {
		let currentNode = this.head;
		if (typeof search === 'function') {
			let callback = search;
			while (currentNode) {
				if (callback(currentNode.data)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		} else {
			let value = search;
			while (currentNode) {
				if (currentNode.data === value) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		}
	}

	//delete(index)
	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;

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
