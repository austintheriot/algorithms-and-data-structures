const makeSearchFunction = require('./depthFirstSearch');
const exampleRootNode = require('../graphExample');

let array;
let visit;
let depthFirstSearch;

describe('Depth-First Search (DFS)', () => {
	beforeEach(() => {
		array = [];
		visit = (data) => {
			array.push(data);
		};
		depthFirstSearch = makeSearchFunction(visit);
	});

	it('Should search by depth first', () => {
		depthFirstSearch(exampleRootNode);
		expect(array).toEqual([0, 1, 3, 2, 4, 5]);
	});
});
