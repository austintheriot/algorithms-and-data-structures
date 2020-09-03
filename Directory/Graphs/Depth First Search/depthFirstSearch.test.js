const makeSearchFunction = require('./depthFirstSearch.solution');
const exampleRootNode = require('../graphExample');

let array;
let visit;
let search;

describe('Depth-First Search (DFS)', () => {
	beforeEach(() => {
		array = [];
		visit = (data) => {
			array.push(data);
		};
		search = makeSearchFunction(visit);
	});

	test('Should search by depth first', () => {
		search(exampleRootNode);
		expect(array).toEqual([0, 1, 3, 2, 4, 5]);
	});
});
