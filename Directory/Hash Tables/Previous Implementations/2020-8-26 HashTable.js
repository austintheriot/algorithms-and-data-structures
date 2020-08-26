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
		let index = 0;
		for (let i = 0; i < key.length; i++) {
			index += key.charCodeAt(i) * i;
		}
		return index % this.array.length;
	}

	get(key) {
		let address = this._hash(key);
		if (this.array[address]) {
			let node = this.array[address].find((node) => node.data.key === key);
			if (node) {
				return node.data.value;
			}
		}
		return undefined;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.array[address]) {
			this.array[address] = new LinkedList();
		}
		this.array[address].prepend({ key, value });
		return this;
	}
};
