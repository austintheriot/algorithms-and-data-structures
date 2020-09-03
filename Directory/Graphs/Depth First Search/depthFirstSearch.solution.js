const rootNode = require('../graphExample');

module.exports = makeSearchFunction = (visitCallback) => {
	return (search = (node) => {
		if (node === null) return;
		visitCallback(node.data);
		node.visited = true;
		for (const each of node.children) {
			if (each.visited === false) {
				search(each);
			}
		}
	});
};
