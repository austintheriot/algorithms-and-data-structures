//Implement a MinHeap using an array. Include with the following functionalities:

// getLeftChildIndex()
// getRightChildIndex()
// getParentIndex()
// hasParent()
// hasLeftChild()
// hasRightChild()
// leftChild()
// rightChild()
// parent()
// swap()
// heapifyUp()
// heapifyDown()

// insert()
// getMin()
// extractMin()

module.exports = class MinHeap {
	constructor() {
		this.array = [];
	}

	getLeftChildIndex(currentIndex) {
		return 2 * currentIndex + 1;
	}

	getRightChildIndex(currentIndex) {
		return 2 * currentIndex + 2;
	}

	getParentIndex(currentIndex) {
		return Math.floor((currentIndex - 1) / 2);
	}

	hasParent(currentIndex) {
		return this.array[this.getParentIndex(currentIndex)] !== undefined;
	}

	hasLeftChild(currentIndex) {
		return this.array[this.getLeftChildIndex(currentIndex)] !== undefined;
	}

	hasRightChild(currentIndex) {
		return this.array[this.getRightChildIndex(currentIndex)] !== undefined;
	}

	leftChild(currentIndex) {
		return this.array[this.getLeftChildIndex(currentIndex)];
	}

	rightChild(currentIndex) {
		return this.array[this.getRightChildIndex(currentIndex)];
	}

	parent(currentIndex) {
		return this.array[this.getParentIndex(currentIndex)];
	}

	swap(firstIndex, secondIndex) {
		let temp = this.array[firstIndex];
		this.array[firstIndex] = this.array[secondIndex];
		this.array[secondIndex] = temp;
	}

	heapifyUp() {
		let currentIndex = this.array.length - 1; //take final node
		while (this.hasParent(currentIndex)) {
			const parentIndex = this.getParentIndex(currentIndex);
			if (this.array[parentIndex] < this.array[currentIndex]) break;
			this.swap(parentIndex, currentIndex);
			currentIndex = parentIndex;
		}
	}

	heapifyDown() {
		if (this.array.length === 0 || this.array.length === 1) return;
		let currentIndex = 0;
		while (this.hasLeftChild(currentIndex)) {
			let smallerNodeIndex = this.getLeftChildIndex(currentIndex);
			if (this.hasRightChild(currentIndex)) {
				smallerNodeIndex =
					this.rightChild(currentIndex) < this.leftChild(currentIndex)
						? this.getRightChildIndex(currentIndex)
						: this.getLeftChildIndex(currentIndex);
			}
			if (this.array[currentIndex] < this.array[smallerNodeIndex]) break;
			this.swap(currentIndex, smallerNodeIndex);
			currentIndex = smallerNodeIndex;
		}
	}

	insert(num) {
		this.array.push(num);
		this.heapifyUp();
		return this;
	}

	getMin() {
		return this.array[0];
	}

	extractMin() {
		const rootData = this.array[0];
		this.array[0] = this.array.pop();
		this.heapifyDown();
		return rootData;
	}
};
