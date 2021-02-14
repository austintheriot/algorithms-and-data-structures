import Node from '../Binary Search Tree Node/BinarySearchTreeNode.solution';

/*       
                  100
                /     \
              50       200          
            /             \        
          25               300       
         /  \                \     
       12    30               400     
      /   \                   /    
    0      24                399   
   /  \    /                /      
-10     8  20              398           
                          /                        
                         397                         
                        /                          
                      396                           
                      /                            
                    350                             
                   /    \                           
                325       375                         
                / \       |   \                        
            312   337     362   387     
           / |    /  \    |  \    \
      307   315 330  340 355 370   390
*/

const root = new Node(100);

root.insertInOrder(50);
root.insertInOrder(25);
root.insertInOrder(12);
root.insertInOrder(0);
root.insertInOrder(24);
root.insertInOrder(8);
root.insertInOrder(20);
root.insertInOrder(-10);
root.insertInOrder(30);
root.insertInOrder(200);
root.insertInOrder(300);
root.insertInOrder(400);
root.insertInOrder(399);
root.insertInOrder(398);
root.insertInOrder(397);
root.insertInOrder(396);
root.insertInOrder(350);
root.insertInOrder(325);
root.insertInOrder(375);
root.insertInOrder(312);
root.insertInOrder(337);
root.insertInOrder(362);
root.insertInOrder(387);
root.insertInOrder(307);
root.insertInOrder(315);
root.insertInOrder(330);
root.insertInOrder(340);
root.insertInOrder(355);
root.insertInOrder(370);
root.insertInOrder(390);

export default root;
