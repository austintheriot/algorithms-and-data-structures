//1 mistake (forgot to add function parameter)

//implement a Hash Table that uses separate chaining for conflict resolution
const LinkedList = require('../Linked Lists/SinglyLinkedList.solution');

//_hash(key)
//get(key)
//set(key, value)

module.exports = class HashTable {
	constructor(length) {
		this.array = new Array(length || 0);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i) * i;
		}
		return hash % this.array.length;
	}

	get(key) {
		const address = this._hash(key);
		if (this.array[address]) {
			return this.array[address].find((node) => node.data.key === key)?.data
				.value;
		} else return undefined;
	}

	set(key, value) {
		const address = this._hash(key);
		if (!this.array[address]) {
			this.array[address] = new LinkedList();
		}
		this.array[address].prepend({ key, value });
		return this;
	}
};
