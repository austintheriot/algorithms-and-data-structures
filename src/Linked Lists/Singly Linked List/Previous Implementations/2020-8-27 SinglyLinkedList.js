//3 mistakes: forgot "this" on this.length, and others

//implement a singly linked list with the following functionalities:

//prepend(data)
//get(index)
//find(data | callback)
//delete(index)

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
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

	find(searchData) {
		if (typeof searchData === 'function') {
			const callback = searchData;

			let currentNode = this.head;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		} else {
			const value = searchData;
			let currentNode = this.head;
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
