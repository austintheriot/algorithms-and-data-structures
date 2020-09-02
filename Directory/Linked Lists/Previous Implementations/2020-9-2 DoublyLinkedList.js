//implement a doubly linked list with the following functionalities:
//return undefined for nonexistent indexes, etc.

//prepend
//append
//get
//find(callback || value)
//delete
//toArray()

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
		this.length = 0;
	}

	//prepend
	prepend(data) {
		const newNode = new Node(data, null, this.head);
		if (this.head) this.head.prev = newNode;
		this.head = newNode;
		if (!this.tail) this.tail = newNode;
		this.length++;
		return this;
	}

	//append
	append(data) {
		const newNode = new Node(data, this.tail, null);
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		if (!this.head) this.head = newNode;
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

	//find(callback || value)
	find(searchTerm) {
		let currentNode = this.head;
		if (typeof searchTerm === 'function') {
			const callback = searchTerm;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		} else {
			const value = searchTerm;
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

		//if only one node:
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			this.length--;
			return this;
		}

		//if multiple nodes:
		//delete head
		if (index === 0) {
			this.head = this.head.next;
			if (this.head) this.head.prev = null;
			this.length--;
			return this;
		}

		//delete tail
		if (index === this.length - 1) {
			this.tail = this.tail.prev;
			if (this.tail) this.tail.next = null;
			this.length--;
			return this;
		}

		//delete middle node
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}

		currentNode.next.prev = currentNode.prev;
		currentNode.prev.next = currentNode.next;
		this.length--;
		return this;
	}

	//toArray()
	toArray() {
		const arr = [];
		let currentNode = this.head;
		while (currentNode) {
			arr.push(currentNode.data);
			currentNode = currentNode.next;
		}
		return arr;
	}
}

module.exports = LinkedList;
