import Queue from '../../../Data Structures/Queues/Queue.solution';

//using a breadth first search
export default function routeBetweenNodes(node1, node2) {
	const queue = new Queue();
	queue.add(node1);
	while (!queue.isEmpty()) {
		const dequeued = queue.remove();
		if (dequeued === node2) return true;
		for (let child of dequeued.children) {
			if (!child.visited) {
				queue.add(child);
				child.visited = true;
			}
		}
	}
	return false;
}
