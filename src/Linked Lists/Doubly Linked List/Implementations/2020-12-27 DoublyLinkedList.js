//implement a doubly linked list with the following functionalities:
//return undefined for nonexistent indexes, etc.

//prepend(data){}
//append(data){}
//get(index){}
//find(callback || value){}
//delete(index){}
//toArray(){} //create array filled with node data

//IMPLEMENTED WITH NO this.length property

class Node {
	constructor(data) {
		this.head;
		this.data = data;
		this.tail;
	}
}

export default class LinkedList {
	constructor() {
		this.head = undefined;
		this.tail = undefined;
	}

	prepend(data) {
		const node = new Node(data);
		if (!this.tail) this.tail = node;
		//empty
		else if (this.head) {
			//non-empty
			this.head.prev = node; //link head to node
			node.next = this.head; //link node to head
		}
		this.head = node; //assign node to linkedlist
		return this;
	}

	append(data) {
		const node = new Node(data);
		if (!this.head) this.head = node;
		//empty
		else if (this.tail) {
			//non-empty
			this.tail.next = node; //link tail to node
			node.prev = this.tail; //link node to tail
		}
		this.tail = node; //assign node to linkedlist
		return this;
	}

	get(index) {
		//out of range index or linked list is empty
		if (index < 0 || !this.head) return undefined;
		let currentNode = this.head;

		for (let i = 0; i < index; i++) {
			if (!currentNode.next) return undefined;
			else currentNode = currentNode.next;
		}

		return currentNode;
	}

	find(search) {
		//empty linked list
		if (!this.head) return undefined;
		let currentNode = this.head;

		if (typeof search === 'function') {
			while (currentNode) {
				if (search(currentNode)) return currentNode;
				else currentNode = currentNode.next;
			}
		} else {
			while (currentNode) {
				if (search === currentNode.data) return currentNode;
				else currentNode = currentNode.next;
			}
		}

		return undefined;
	}

	delete(index) {
		//empty linkedlist
		if (!this.head || index < 0) return this;

		//1 element linkedlist
		if (this.head === this.tail) {
			this.head = this.tail = undefined;
			return this;
		}

		//>1 element
		let currentNode = this.head;
		//move to index of node to delete
		for (let i = 0; i < index; i++) {
			if (!currentNode.next) return this;
			else currentNode = currentNode.next;
		}

		//assign prev and next nodes to ignore current node
		//not head node
		if (currentNode.prev) currentNode.prev.next = currentNode.next;
		//head node
		else this.head = this.head.next;
		//not tail node
		if (currentNode.next) currentNode.next.prev = currentNode.prev;
		//tail node must be deleted in linked list
		else this.tail = this.tail.prev; //tail node

		return this;
	}

	toArray() {
		const array = [];

		let currentNode = this.head;
		while (currentNode) {
			array.push(currentNode.data);
			currentNode = currentNode.next;
		}

		return array;
	}
}
