import Node from '../Binary Search Tree Node/BinarySearchTreeNode.solution';

/* 
              10
            /    \
           5       15
         /  \    /    \
        3     8  13     17
       /|   / |  | \   |  \
      1 4  6  9  11 14 16 18 
*/

const root = new Node(10);

root.insertInOrder(5);
root.insertInOrder(15);
root.insertInOrder(3);
root.insertInOrder(8);
root.insertInOrder(13);
root.insertInOrder(17);
root.insertInOrder(1);
root.insertInOrder(4);
root.insertInOrder(6);
root.insertInOrder(9);
root.insertInOrder(11);
root.insertInOrder(14);
root.insertInOrder(16);
root.insertInOrder(18);

export default root;
