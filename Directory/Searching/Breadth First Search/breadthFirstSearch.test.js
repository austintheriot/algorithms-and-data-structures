const exampleRootNode = require('../../Graphs/Examples/directedGraphSmall');
const makeBreadthFirstSearchFunction = require('./breadthFirstSearch');

let array;
let visitCallback;
let breadthFirstSearch;

describe('Breadth-First Search (BFS)', () => {
	beforeEach(() => {
		array = [];
		visitCallback = (data) => {
			array.push(data);
		};
		breadthFirstSearch = makeBreadthFirstSearchFunction(visitCallback);
	});

	it('Should search by depth first', () => {
		breadthFirstSearch(exampleRootNode);
		expect(array).toEqual([0, 1, 4, 5, 3, 2]);
	});
});
