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

root.insertInReverseOrder(50);
root.insertInReverseOrder(25);
root.insertInReverseOrder(12);
root.insertInReverseOrder(0);
root.insertInReverseOrder(24);
root.insertInReverseOrder(8);
root.insertInReverseOrder(20);
root.insertInReverseOrder(-10);
root.insertInReverseOrder(30);
root.insertInReverseOrder(200);
root.insertInReverseOrder(300);
root.insertInReverseOrder(400);
root.insertInReverseOrder(399);
root.insertInReverseOrder(398);
root.insertInReverseOrder(397);
root.insertInReverseOrder(396);
root.insertInReverseOrder(350);
root.insertInReverseOrder(325);
root.insertInReverseOrder(375);
root.insertInReverseOrder(312);
root.insertInReverseOrder(337);
root.insertInReverseOrder(362);
root.insertInReverseOrder(387);
root.insertInReverseOrder(307);
root.insertInReverseOrder(315);
root.insertInReverseOrder(330);
root.insertInReverseOrder(340);
root.insertInReverseOrder(355);
root.insertInReverseOrder(370);
root.insertInReverseOrder(390);

export default root;
