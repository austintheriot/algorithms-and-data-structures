//Very basic, singly Linked List

class LinkedListNode {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

module.exports = class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	prepend(value) {
		let newNode = new LinkedListNode(value, this.head);
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

	find(value) {
		if (this.length === 0) return undefined;
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return undefined;
	}

	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;

		if (index === 0) {
			this.head = this.head.next;
			this.length--;
			return this;
		}

		//stop just short of the indicated node
		let currentNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		//point the current node to the next next node (skip over the current node)
		currentNode.next = currentNode.next.next;
		this.length--;
		return this;
	}
};
