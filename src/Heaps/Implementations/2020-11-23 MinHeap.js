//Implement a MinHeap using an array. Include the following functionalities:

// getLeftChildIndex(){}
// getRightChildIndex(){}
// getParentIndex(){}
// hasParent(){}
// hasLeftChild(){}
// hasRightChild(){}
// leftChild(){}
// rightChild(){}
// parent(){}
// swap(){} //index1, index2
// heapifyUp(){} //no parameters
// heapifyDown(){} //no parameters

// insert(){} //value
// getMin(){}
// extractMin(){}

module.exports = class MinHeap {
	//Errors:
	//Didn't enclose getParentIndex in ()
	//Didn't compare nodes to undefined in hasParentNode
	//Overcomplicated heapifyup & heapifyDown
	//Didn't delete min node in extractMin

	constructor() {
		this.array = [];
	}

	getLeftChildIndex(i) {
		return 2 * i + 1;
	}
	getRightChildIndex(i) {
		return 2 * i + 2;
	}
	getParentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	hasParent(i) {
		const parentIndex = this.getParentIndex(i);
		return this.array[parentIndex] === undefined ? false : true;
	}
	hasLeftChild(i) {
		const leftChildIndex = this.getLeftChildIndex(i);
		return this.array[leftChildIndex] === undefined ? false : true;
	}
	hasRightChild(i) {
		const rightChildIndex = this.getRightChildIndex(i);
		return this.array[rightChildIndex] === undefined ? false : true;
	}
	leftChild(i) {
		if (!this.hasLeftChild(i)) return undefined;
		const leftChildIndex = this.getLeftChildIndex(i);
		return this.array[leftChildIndex];
	}
	rightChild(i) {
		if (!this.hasRightChild(i)) return undefined;
		const rightChildIndex = this.getRightChildIndex(i);
		return this.array[rightChildIndex];
	}
	parent(i) {
		if (!this.hasParent(i)) return undefined;
		const parentIndex = this.getParentIndex(i);
		return this.array[parentIndex];
	}
	swap(index1, index2) {
		const index1Copy = this.array[index1];
		this.array[index1] = this.array[index2];
		this.array[index2] = index1Copy;
		return this;
	}
	heapifyUp() {
		let currentIndex = this.array.length - 1;

		while (
			this.hasParent(currentIndex) &&
			this.array[currentIndex] < this.parent(currentIndex)
		) {
			this.swap(currentIndex, this.getParentIndex(currentIndex));
			currentIndex = this.getParentIndex(currentIndex);
		}
		return this;
	}
	heapifyDown() {
		let currentIndex = 0;

		while (this.hasLeftChild(currentIndex)) {
			//compare currentNode to left and right children
			//swap with the smaller child

			//check left node
			let currentNode = this.array[currentIndex];
			let leftChildNode = this.leftChild(currentIndex);
			let smallerNodeIndex =
				leftChildNode < currentNode
					? this.getLeftChildIndex(currentIndex)
					: currentIndex;

			//check right node
			if (this.hasRightChild(currentIndex)) {
				let rightChildNode = this.rightChild(currentIndex);
				smallerNodeIndex =
					rightChildNode < this.array[smallerNodeIndex]
						? this.getRightChildIndex(currentIndex)
						: smallerNodeIndex;
			}

			//in correct order
			if (smallerNodeIndex === currentIndex) break;

			this.swap(currentIndex, smallerNodeIndex);
			currentIndex = smallerNodeIndex;
		}

		return this;
	}

	insert(nodeValue) {
		//insert node at the bottom of the tree
		this.array.push(nodeValue);
		//Heapify it up
		this.heapifyUp(this.array.length - 1);
	}
	getMin() {
		//return the topmost node
		return this.array[0];
	}
	extractMin() {
		//return the topmost node
		const min = this.array[0];
		//delete the top node, and move the last node to the top
		this.array.shift();
		const lastNode = this.array.pop();
		this.array.unshift(lastNode);
		//heapify down the node
		this.heapifyDown();
		return min;
	}
};
