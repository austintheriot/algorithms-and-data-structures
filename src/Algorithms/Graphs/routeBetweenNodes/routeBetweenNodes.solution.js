/* 

  Given two nodes on a graph, implement an algorithm to determine
  whether a route exists between them.

  This can be accomplished with BFS, DFS, or a bidirectional search,
  which is more efficient, but also more complex.

*/

//Breadth First Search (using a queue)
const BFS = (xI, xG) => {
	const queue = [];
	xI.visited = true;
	queue.push(xI);

	while (queue.length !== 0) {
		const dequeuedNode = queue.shift();
		if (dequeuedNode === xG) return true;
		for (let child of dequeuedNode.children) {
			if (child.visited === false) {
				child.visited = true;
				queue.push(child);
			}
		}
	}
	return false;
};

//Depth First Search (using a stack)
const DFS = (startNode, endNode) => {
	const stack = [];
	startNode.visited = true;
	stack.push(startNode);

	while (stack.length !== 0) {
		const poppedNode = stack.pop();
		if (poppedNode === endNode) return true;
		for (let child of poppedNode.children) {
			if (child.visited === false) {
				child.visited = true;
				stack.push(child);
			}
		}
	}
	return false;
};

//Bidirectional BFS
const bidirectionalSearch = (root1, root2) => {
	const queue1 = [];
	const queue2 = [];

	queue1.push(root1);
	root1.visited1 = true;
	queue2.push(root2);
	root2.visited2 = true;

	while (queue1.length !== 0 && queue2.length !== 0) {
		const dequeued1 = queue1.pop();
		if (dequeued1.visited2) {
			return true;
		} else {
			for (let childOf1 of dequeued1.children) {
				if (!childOf1.visited1) {
					childOf1.visited1 = true;
					queue1.push(childOf1);
				}
			}
		}
		const dequeued2 = queue2.pop();
		if (dequeued2.visited1) {
			return true;
		} else {
			for (let childOf2 of dequeued2.children) {
				if (!childOf2.visited2) {
					childOf2.visited2 = true;
					queue2.push(childOf2);
				}
			}
		}
	}
	return false;
};
