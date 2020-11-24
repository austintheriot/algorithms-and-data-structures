//implement a simple stack with the following functionalities:
//create a linked list to implement the structure (with a length property)
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
		if (!this.head) return this;

		if (!this.head.next) {
			this.head = null;
			this.length--;
			return this;
		}

		this.head = this.head.next;
		this.length--;
		return this;
	}
}

module.exports = class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	//push()
	push(data) {
		this.linkedList.prepend(data);
		return this;
	}

	//pop()
	pop() {
		const deletedHead = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.deleteHead();
		return deletedHead;
	}
	//peek()
	peek() {
		return this.linkedList.head ? this.linkedList.head.data : null;
	}
	//isEmpty()
	isEmpty() {
		return this.linkedList.head === null ? true : false;
	}
};
