//implement a simple queue with the following functionalities:
//(use a linked list)
//add()
//remove()
//peek()
//isEmpty()

//use a linked list
//append new items to tail
//remove from head

class Node {
	constructor(data, prev, next) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(data) {
		const newNode = new Node(data, this.tail, null);
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		if (!this.head) this.head = newNode;
		return this;
	}

	extractHead() {
		//length 0
		if (!this.head) return null;

		const head = this.head;

		//length 1
		if (this.head && this.head === this.tail) {
			this.head = null;
			this.tail = null;
			return head;
		}

		//length more than 1
		this.head = this.head.next;
		this.head.prev = null;
		return head;
	}
}

module.exports = class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}
	//add()
	add(data) {
		this.linkedList.append(data);
		return this;
	}
	//remove()
	remove() {
		const head = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.extractHead();
		return head;
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
