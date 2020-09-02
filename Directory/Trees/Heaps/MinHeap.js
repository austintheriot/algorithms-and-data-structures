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

	getRightChildIndex() {
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
		let currentIndex = this.array.length - 1;
		let currentNode = this.array[currentIndex];
		while (currentNode && this.hasParent(currentIndex)) {
			const parentIndex = this.getParentIndex(currentIndex);
			const parentNode = this.parent(currentIndex);

			if (parentNode < currentNode) {
				this.swap(parentIndex, currentIndex);
			} else {
				break;
			}

			currentIndex = parentIndex;
			currentNode = parentNode;
		}
		return this;
	}

	heapifyDown() {
		let currentIndex = 0;
		let currentNode = this.array[currentIndex];

		while (currentNode && this.hasLeftChild(currentIndex)) {
			const leftChildIndex = this.getLeftChildIndex(currentIndex);
			const leftChild = this.leftChild(leftChildIndex);
			const hasRightChild = this.hasRightChild(currentIndex);
			let rightChildIndex;
			let rightChild = Infinity;
			if (hasRightChild) {
				rightChildIndex = this.getRightChildIndex(currentIndex);
				rightChild = this.rightChild(currentIndex);
			}
			if (leftChild < currentNode || rightChild < currentNode) {
				//one child is smaller, node should move
				if (leftChild < rightChild) {
					this.swap(currentIndex, leftChildIndex);
					currentIndex = leftChildIndex;
					currentNode = leftChild;
				} else {
					this.swap(currentIndex, rightChildIndex);
					currentIndex = rightChildIndex;
					currentNode = rightChild;
				}
			} else {
				//neither children are smaller, and the node should stay put
				break;
			}
		}
		return this;
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
		this.array.unshift(this.array.pop());
		this.heapifyDown();
		return rootData;
	}
};
