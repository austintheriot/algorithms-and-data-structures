module.exports = class HashTable {
	constructor(size) {
		this.array = new Array(size || 0);
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
		let currentBucket = this.array[address];
		if (currentBucket) {
			for (let el of currentBucket) {
				if (el[0] === key) {
					return el[1];
				}
			}
			return undefined;
		}
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.array[address]) {
			this.array[address] = [];
		}
		this.array[address].push([key, value]);
	}
};
