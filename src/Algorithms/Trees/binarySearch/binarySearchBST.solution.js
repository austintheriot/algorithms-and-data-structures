//return undefined if node is not found

function binarySearch(node, num) {
	if (node == null) return undefined;
	else if (node.data < num) return binarySearch(node.right, num);
	else if (node.data > num) return binarySearch(node.left, num);
	else if (node.data === num) return node;
}

module.exports = binarySearch;
