//implement a simple queue with the following functionalities:
//use a linked list
//return null for nonexistent peek() calls, etc.
//add(){}
//remove(){}
//peek(){}
//isEmpty(){}
const LinkedList = require('../Linked Lists/DoublyLinkedList.solution');

module.exports = class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}
	add(data) {
		this.linkedList.append(data);
		return this;
	}
	remove() {
		const head = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.delete(0);
		return head;
	}
	peek() {
		const head = this.linkedList.head ? this.linkedList.head.data : null;
		return head;
	}
	isEmpty() {
		return this.linkedList.head ? false : true;
	}
};
