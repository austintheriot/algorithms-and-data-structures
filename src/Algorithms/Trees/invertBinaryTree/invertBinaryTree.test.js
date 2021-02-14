import invert from './invertBinaryTree';

// test examples
import perfectTree from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTree (new)';
import imperfectTree from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree';
import imperfectTree2 from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree2';

import perfectTreeInverted from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTreeInverted (new)';
import imperfectTreeInverted from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree';
import imperfectTree2Inverted from '../../../Data Structures/Trees/Binary Tree/Examples/imperfectBinarySearchTree2Inverted';

import Node from '../../../Data Structures/Trees/Binary Tree/Binary Search Tree Node/BinarySearchTreeNode.solution';

// miniature test example
const tree1 = new Node(50);
tree1.insertInOrder(0)
tree1.insertInOrder(100)
tree1.insertInOrder(25)
tree1.insertInOrder(75);

const tree1Inverted = new Node(50);
tree1Inverted.insertInReverseOrder(0)
tree1Inverted.insertInReverseOrder(100)
tree1Inverted.insertInReverseOrder(25)
tree1Inverted.insertInReverseOrder(75);


describe('Invert a binary tree', () => {
  it('Should mirror all the nodes of a binary tree horizontally', () => {
    invert(tree1)
    expect(tree1).toEqual(tree1Inverted);

    invert(perfectTree)
    expect(perfectTree).toEqual(perfectTreeInverted);

    invert(imperfectTree)
    expect(imperfectTree).toEqual(imperfectTreeInverted);

    invert(imperfectTree2)
    expect(imperfectTree2).toEqual(imperfectTree2Inverted);
  })
})