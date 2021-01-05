//implement a Hash Table that uses separate chaining for conflict resolution
import LinkedList from '../Linked Lists/Doubly Linked List/DoublyLinkedList.solution';

//return undefined for nonexistent keys
//should create array of specified length
//_hash(string){}
//get(string){}
//set(string, data){}

export default class HashTable {
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

	set(string, data) {
		const address = this._hash(string);
		if (this.array[address] == undefined)
			this.array[address] = new LinkedList();
		this.array[address].append([string, data]);
		return this;
	}

	get(string) {
		const address = this._hash(string);
		return this.array[address].find((node) => node.data[0] === string)?.data[1];
	}
}
