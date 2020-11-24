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
		let hash = 0;
		for (let i = 0; i < string.length; i++) {
			hash += string.charCodeAt(i) * i;
		}
		return hash % this.array.length;
	}

	get(string) {
		let address = this._hash(string);
		let linkedList = this.array[address];
		if (linkedList)
			return linkedList.find((node) => node.data.key === string)?.data.value;
		return undefined;
	}
	set(string, data) {
		let address = this._hash(string);
		if (this.array[address] == undefined)
			this.array[address] = new LinkedList();
		this.array[address].append({ key: string, value: data });
	}
};
