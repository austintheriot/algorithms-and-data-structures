import Node from '../Binary Search Tree Node/BinarySearchTreeNode.solution';

/*       
                  10
               /     \
              /       \
             5        15
           /  \     /    \
          3     8  13     17
         /|   / |  | \   |  \
        1 4  6  9  11 14 16 18 
      / |    |     |           \
     0  2    7     12          25
    /                         /  \ 
  -1                         19   41

*/

const root = new Node(10);

root.insertInReverseOrder(5);
root.insertInReverseOrder(15);
root.insertInReverseOrder(3);
root.insertInReverseOrder(8);
root.insertInReverseOrder(13);
root.insertInReverseOrder(17);
root.insertInReverseOrder(1);
root.insertInReverseOrder(4);
root.insertInReverseOrder(6);
root.insertInReverseOrder(9);
root.insertInReverseOrder(11);
root.insertInReverseOrder(14);
root.insertInReverseOrder(16);
root.insertInReverseOrder(18);
root.insertInReverseOrder(0);
root.insertInReverseOrder(2);
root.insertInReverseOrder(-1);
root.insertInReverseOrder(25);
root.insertInReverseOrder(41);
root.insertInReverseOrder(12);
root.insertInReverseOrder(19);

export default root;
