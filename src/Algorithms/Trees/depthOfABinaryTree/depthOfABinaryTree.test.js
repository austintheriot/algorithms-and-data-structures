import perfectTree from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTree (new)';
import imperfectTree from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree';
import depth from './depthOfABinaryTree';

it('Should return the max depth of a binary tree', () => {
  expect(depth(perfectTree)).toBe(4);
  expect(depth(imperfectTree)).toBe(6);
})