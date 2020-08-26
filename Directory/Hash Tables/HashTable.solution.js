const LinkedList = require('../Linked Lists/LinkedList.solution');

module.exports = class HashTable {
	constructor(size) {
		this.array = new Array(size || 0);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.array.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.array[address]) {
			this.array[address] = new LinkedList();
		}
		this.array[address].prepend({ key, value });
		return this.array;
	}

	get(key) {
		const address = this._hash(key);
		const linkedList = this.array[address];
		if (linkedList) {
			let nodeValue = linkedList.find((nodeValue) => nodeValue.key === key);
			if (nodeValue) {
				return nodeValue.value;
			}
		}
		return undefined;
	}
};
