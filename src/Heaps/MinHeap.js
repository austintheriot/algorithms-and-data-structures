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

	leftChildIndex(i) {}

	rightChildIndex(i) {}

	parentIndex(i) {}

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

	heapifyUp() {}

	heapifyDown() {}

	insert(number) {}

	getMin() {}

	extractMin() {}
};
