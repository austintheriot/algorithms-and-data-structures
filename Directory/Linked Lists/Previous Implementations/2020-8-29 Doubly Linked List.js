//implement a doubly linked list with the following functionalities:

//prepend(data)
//append(data)
//get(index)
//find(data | callback)
//delete(index)
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

	append(data) {
		const newNode = new Node(data, this.tail, null);
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		if (!this.head) this.head = newNode;
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
		let currentNode = this.head;
		if (typeof search === 'function') {
			const callback = search;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		} else {
			const value = search;
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

		//single node linked list:
		if (index === 0 && this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return this;
		}

		//else if linked list is multiple nodes long:
		if (index === 0) {
			this.head = this.head.next;
			if (this.head) this.head.prev = null;
			this.length--;
			return this;
		}
		if (index === this.length - 1) {
			this.tail = this.tail.prev;
			if (this.tail) this.tail.next = null;
			this.length--;
			return this;
		}

		//normal deletion:
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		currentNode.prev.next = currentNode.next;
		currentNode.next.prev = currentNode.prev;
		this.length--;
		return this;
	}

	toArray() {
		let currentNode = this.head;
		const arr = [];
		while (currentNode) {
			arr.push(currentNode.data);
			currentNode = currentNode.next;
		}
		return arr;
	}
}

module.exports = LinkedList;
