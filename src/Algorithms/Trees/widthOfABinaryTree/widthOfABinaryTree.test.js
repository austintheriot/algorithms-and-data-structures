import perfectTree from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTree (new)';
import imperfectTree from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree';
import imperfectTree2 from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree2';
import width from './widthOfABinaryTree';

describe('Maximum width of a binary tree', () => {
  it('Should return the maximum width of a binary tree', () => {
    expect(width(perfectTree)).toBe(8);
    expect(width(imperfectTree)).toBe(8);
    expect(width(imperfectTree2)).toBe(7);
  })
})