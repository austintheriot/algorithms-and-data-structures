import rootNode from '../../Graphs/Examples/directedGraphSmall';
import makeSearch from './breadthFirstSearch';

let array;
let visitCallback;
let breadthFirstSearch;

describe('Breadth-First Search (BFS)', () => {
	beforeEach(() => {
		array = [];
		visitCallback = (node) => {
			array.push(node.data);
		};
		breadthFirstSearch = makeSearch(visitCallback);
	});

	it('Should search by depth first', () => {
		breadthFirstSearch(rootNode);
		expect(array).toEqual([0, 1, 4, 5, 3, 2]);
	});
});
