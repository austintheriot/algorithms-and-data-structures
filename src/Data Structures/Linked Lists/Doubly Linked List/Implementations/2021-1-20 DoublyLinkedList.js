//implement a doubly linked list with the following functionalities:
//return undefined for nonexistent indexes, etc.

import { isThrowStatement } from 'typescript';

//prepend(data){}
//append(data){}
//get(index){}
//find(search){}
//delete(index){}
//toArray(){} //create array filled with node data

class Node {
	constructor(data) {
		this.prev;
		this.data = data;
		this.next;
	}
}

export default class LinkedList {
	constructor() {
		this.head;
		this.tail;
	}

	prepend(data) {
		const node = new Node(data);
		if (!this.tail) this.tail = node;
		if (this.head) {
			this.head.prev = node;
			node.next = this.head;
		}
		this.head = node;
		return this;
	}

	append(data) {
		const node = new Node(data);
		if (!this.head) this.head = node;
		if (this.tail) {
			this.tail.next = node;
			node.prev = this.tail;
		}
		this.tail = node;
		return this;
	}

	get(index) {
		if (index < 0 || !this.head) return undefined;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
			if (!currentNode) return undefined;
		}
		return currentNode;
	}

	find(search) {
		let currentNode = this.head;
		if (typeof search === 'function') {
			while (currentNode) {
				if (search(currentNode)) return currentNode;
				else currentNode = currentNode.next;
			}
		} else {
			while (currentNode) {
				if (currentNode.data === search) return currentNode;
				else currentNode = currentNode.next;
			}
		}
		return undefined;
	}

	delete(index) {
		//bad index or empty linked list
		if (index < 0 || !this.head) return this;

		//one node
		if (this.head === this.tail) {
			this.head = this.tail = undefined;
			return this;
		}

		//more than one node
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
			if (!currentNode) return this;
		}

		//not head node
		if (currentNode.prev) currentNode.prev.next = currentNode.next;
		//head node
		else this.head = this.head.next;
		//not tail node
		if (currentNode.next) currentNode.next.prev = currentNode.prev;
		else this.tail = this.tail.prev;
		return this;
	}

	//create array filled with node data
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
