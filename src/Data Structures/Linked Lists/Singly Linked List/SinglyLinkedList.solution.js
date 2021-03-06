//Very basic, singly Linked List

class LinkedListNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

module.exports = class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	prepend(data) {
		let newNode = new LinkedListNode(data, this.head);
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
		if (this.length === 0) return undefined;
		let currentNode = this.head;

		//search using callback
		if (typeof search === 'function') {
			let callback = search;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		}

		//search using value
		else {
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

	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;

		//delete head node
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
