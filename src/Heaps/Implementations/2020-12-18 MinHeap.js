//Implement a MinHeap using an array. Include the following functionalities:

// leftChildIndex(index){}
// rightChildIndex(index){}
// parentIndex(index){}
// hasParent(index){}
// hasLeftChild(index){}
// hasRightChild(index){}
// leftChild(index){}
// rightChild(index){}
// parent(index){}
// swap(index1, index2){} //index1, index2
// heapifyUp(){} //no parameters
// heapifyDown(){} //no parameters

// insert(data){} //value
// getMin(){}
// extractMin(){}

module.exports = class MinHeap {
	constructor() {
		this.array = [];
	}

	leftChildIndex(i) {
		return 2 * i + 1;
	}

	rightChildIndex(i) {
		return 2 * i + 2;
	}

	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	hasParent(index) {
		const parentIndex = this.parentIndex(index);
		return this.array[parentIndex] === undefined ? false : true;
	}

	hasLeftChild(index) {
		const leftChildIndex = this.leftChildIndex(index);
		return this.array[leftChildIndex] === undefined ? false : true;
	}

	hasRightChild(index) {
		const rightChildIndex = this.rightChildIndex(index);
		return this.array[rightChildIndex] === undefined ? false : true;
	}

	leftChild(index) {
		const leftChildIndex = this.leftChildIndex(index);
		return this.array[leftChildIndex];
	}

	rightChild(index) {
		const rightChildIndex = this.rightChildIndex(index);
		return this.array[rightChildIndex];
	}

	parent(index) {
		const parentIndex = this.parentIndex(index);
		return this.array[parentIndex];
	}

	swap(index1, index2) {
		const temp = this.array[index1];
		this.array[index1] = this.array[index2];
		this.array[index2] = temp;
		return this;
	}

	heapifyUp() {
		let i = this.array.length - 1;

		while (this.hasParent(i)) {
			if (this.array[i] > this.parent(i)) break;
			this.swap(i, this.parentIndex(i));
			i = this.parentIndex(i);
		}

		return this;
	}

	heapifyDown() {
		let i = 0;

		while (this.hasLeftChild(i)) {
			let min = this.leftChild(i) < this.array[i] ? this.leftChildIndex(i) : i;

			if (this.hasRightChild(i)) {
				min =
					this.rightChild(i) < this.array[min] ? this.rightChildIndex(i) : min;
			}

			if (min === i) break;
			this.swap(i, min);
			i = min;
		}

		return this;
	}

	insert(number) {
		this.array.push(number);
		this.heapifyUp();
		return this;
	}

	getMin() {
		return this.array[0];
	}

	extractMin() {
		const min = this.array[0];
		this.array[0] = this.array.pop();
		this.heapifyDown();
		return min;
	}
};
