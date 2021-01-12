const LinkedList = require('../Linked Lists/DoublyLinkedList.solution');

//implement a simple queue with the following functionalities:
//add()
//remove()
//peek()
//isEmpty()

module.exports = class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	add(data) {
		this.linkedList.append(data);
		return this;
	}

	remove() {
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
