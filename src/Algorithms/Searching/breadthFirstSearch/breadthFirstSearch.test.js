import rootNode from '../../../Data Structures/Graphs/Examples/directedGraphSmall';
import makeSearch from './breadthFirstSearch';

describe('Breadth-First Search (BFS)', () => {
	it('Should search by depth first', () => {
		const array = [];
		const visitCallback = (node) => {
			array.push(node.data);
		};
		const breadthFirstSearch = makeSearch(visitCallback);

		breadthFirstSearch(rootNode);
		expect(array).toEqual([0, 1, 4, 5, 3, 2]);
	});
});
