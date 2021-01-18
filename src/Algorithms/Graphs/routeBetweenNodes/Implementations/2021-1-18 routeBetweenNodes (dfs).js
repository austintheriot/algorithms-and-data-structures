//optional data structures
import Queue from '../../../Data Structures/Queues/Queue.solution';
import Stack from '../../../Data Structures/Stacks/Stack.solution';

export default function routeBetweenNodes(node1, node2) {
	if (node1 === node2) return true;
	node1.visited = true;
	for (let child of node1.children) {
		if (!child.visited) {
			if (routeBetweenNodes(child, node2)) return true;
		}
	}
	return false;
}
