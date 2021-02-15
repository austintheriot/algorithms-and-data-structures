import isGraphATree from './isGraphATree';
import directedGraphSmall from '../../../Data Structures/Graphs/Examples/directedGraphSmall';
import directedGraphLarge from '../../../Data Structures/Graphs/Examples/directedGraphLarge';
import undirectedGraphLarge from '../../../Data Structures/Graphs/Examples/undirectedGraphLarge';
import treeGraph from '../../../Data Structures/Graphs/Examples/treeGraph';

it('Should determine whether a graph is a tree or not.', () => {
  expect(isGraphATree(directedGraphSmall)).toBe(false);
  expect(isGraphATree(directedGraphLarge)).toBe(false);
  expect(isGraphATree(undirectedGraphLarge)).toBe(false);
  expect(isGraphATree(treeGraph)).toBe(true);
});