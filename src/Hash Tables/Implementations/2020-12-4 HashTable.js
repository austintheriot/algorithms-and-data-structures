//implement a Hash Table that uses separate chaining for conflict resolution
const LinkedList = require('../Linked Lists/DoublyLinkedList.solution');

//should create array of specified length
//_hash(string){}
//get(string){}
//set(string, data){}

module.exports = class HashTable {
	constructor(length) {
		this.array = new Array(length ?? 0);
	}
	_hash(string) {
		let index = 0;
		for (let i = 0; i < string.length; i++) {
			index += string.charCodeAt(i);
		}
		return index % this.array.length;
	}
	get(string) {
		let address = this._hash(string);
		return this.array[address]?.find((node) => node.data.key === string)?.data
			.value;
	}
	set(string, data) {
		let address = this._hash(string);
		if (!this.array[address]) this.array[address] = new LinkedList();
		this.array[address].append({ key: string, value: data });
	}
};
