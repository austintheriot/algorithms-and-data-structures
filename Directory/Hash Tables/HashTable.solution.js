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
			this.array[address] = [];
		}
		this.array[address].push([key, value]);
		return this.array;
	}

	get(key) {
		const address = this._hash(key);
		const currentBucket = this.array[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}
};
