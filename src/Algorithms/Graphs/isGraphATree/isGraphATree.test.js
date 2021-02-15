import isGraphATree from './isGraphATree';
import directedGraphLarge from '../../../Data Structures/Graphs/Examples/directedGraphLarge';
import undirectedGraphLarge from '../../../Data Structures/Graphs/Examples/undirectedGraphLarge';
import treeGraph from '../../../Data Structures/Graphs/Examples/treeGraph';

it('Should determine whether a graph is a tree or not.', () => {
  expect(isGraphATree(directedGraphLarge.node0)).toBe(false);
  expect(isGraphATree(undirectedGraphLarge.node0)).toBe(false);
  expect(isGraphATree(treeGraph.node0)).toBe(true);
});