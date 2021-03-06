const LinkedList = require('../Linked Lists/SinglyLinkedList.solution');

//implement a simple stack with the following functionalities:
//push()
//pop()
//peek()
//isEmpty()

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
		this.linkedList.delete(0);
		return deletedData;
	}

	peek() {
		return this.linkedList.head ? this.linkedList.head.data : null;
	}

	isEmpty() {
		return !this.linkedList.head;
	}
};
