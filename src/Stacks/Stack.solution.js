//implement a simple stack with the following functionalities:
//push()
//pop()
//peek()
//isEmpty()

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

	deleteHead() {
		if (this.length === 0) return null;
		this.head = this.head.next;
		this.length--;
		return this;
	}
}

module.exports = class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	push(data) {
		this.linkedList.prepend(data);
		return this;
	}

	pop() {
		const deletedData = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.deleteHead();
		return deletedData;
	}

	peek() {
		return this.linkedList.head ? this.linkedList.head.data : null;
	}

	isEmpty() {
		return !this.linkedList.head;
	}
};
