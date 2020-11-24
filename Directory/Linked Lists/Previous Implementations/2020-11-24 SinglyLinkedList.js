//implement a singly linked list with the following functionalities:'
//head
//length

//prepend
//get(index)
//find(callbackOrValue)
//delete(index)

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

	//prepend
	prepend(data) {
		const newNode = new Node(data, this.head);
		this.head = newNode;
		this.length++;
		return this;
	}

	//get
	get(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	//find
	find(callbackOrValue) {
		let currentNode = this.head;
		if (typeof callbackOrValue === 'function') {
			const callback = callbackOrValue;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
		} else {
			const value = callbackOrValue;
			while (currentNode) {
				if (value === currentNode.data) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
		}
		return undefined;
	}
	//delete
	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (!this.head) return this;
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
