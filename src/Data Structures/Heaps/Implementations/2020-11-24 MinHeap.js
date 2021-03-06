//Implement a MinHeap using an array. Include the following functionalities:

// getLeftChildIndex(index){}
// getRightChildIndex(index){}
// getParentIndex(index){}
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

	getLeftChildIndex(index) {
		return index * 2 + 1;
	}
	getRightChildIndex(index) {
		return index * 2 + 2;
	}
	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}
	hasParent(index) {
		const parentIndex = this.getParentIndex(index);
		return this.array[parentIndex] === undefined ? false : true;
	}
	hasLeftChild(index) {
		const leftChildIndex = this.getLeftChildIndex(index);
		return this.array[leftChildIndex] === undefined ? false : true;
	}
	hasRightChild(index) {
		const rightChildIndex = this.getRightChildIndex(index);
		return this.array[rightChildIndex] === undefined ? false : true;
	}
	leftChild(index) {
		const leftChildIndex = this.getLeftChildIndex(index);
		return this.array[leftChildIndex];
	}
	rightChild(index) {
		const rightChildIndex = this.getRightChildIndex(index);
		return this.array[rightChildIndex];
	}
	parent(index) {
		const parentIndex = this.getParentIndex(index);
		return this.array[parentIndex];
	}
	swap(index1, index2) {
		const temp = this.array[index1];
		this.array[index1] = this.array[index2];
		this.array[index2] = temp;
		return this;
	}

	heapifyUp() {
		let currentIndex = this.array.length - 1;

		while (
			this.hasParent(currentIndex) &&
			this.parent(currentIndex) > this.array[currentIndex]
		) {
			let parentIndex = this.getParentIndex(currentIndex);
			this.swap(currentIndex, parentIndex);
			currentIndex = parentIndex;
		}
		return this;
	}

	heapifyDown() {
		let currentIndex = 0;

		while (this.hasLeftChild(currentIndex)) {
			let leftIndex = this.getLeftChildIndex(currentIndex);
			let smallerIndex =
				this.array[leftIndex] < this.array[currentIndex]
					? leftIndex
					: currentIndex;

			if (this.hasRightChild(currentIndex)) {
				let rightIndex = this.getRightChildIndex(currentIndex);
				smallerIndex =
					this.array[rightIndex] < this.array[smallerIndex]
						? rightIndex
						: smallerIndex;
			}

			if (smallerIndex === currentIndex) break;

			this.swap(currentIndex, smallerIndex);
			currentIndex = smallerIndex;
		}
		return this;
	}

	insert(data) {
		this.array.push(data);
		this.heapifyUp();
		return this;
	}

	getMin() {
		return this.array[0];
	}

	extractMin() {
		const min = this.array[0];
		const last = this.array.pop();
		this.array[0] = last;
		this.heapifyDown();
		return min;
	}
};
