import makeSearch from './depthFirstSearch';
import rootNode from '../../Graphs/Examples/directedGraphSmall';

let array;
let visit;
let depthFirstSearch;

describe('Depth-First Search (DFS)', () => {
	beforeEach(() => {
		array = [];
		visit = (node) => {
			array.push(node.data);
		};
		depthFirstSearch = makeSearch(visit);
	});

	it('Should search by depth first', () => {
		depthFirstSearch(rootNode);
		expect(array).toEqual([0, 1, 3, 2, 4, 5]);
	});
});
