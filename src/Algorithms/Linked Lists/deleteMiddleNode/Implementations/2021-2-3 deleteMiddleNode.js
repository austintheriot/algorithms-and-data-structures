/* 

  Given the first node of a singly linked list, implement an algorithm
  to delete the middle node of a list. If the linked list has an even
  number of nodes, delete the rightmost middle node.

*/

export default function deleteMiddleNode(node) {
  /* 
  0 1 2 (3) 4 5

  0 <c start
  1 <r start

  1
  3

  2 <c end
  5 <r end

  ---------------

  0 1 2 (3) 4 5 6
  
  0 <c start
  1 <r start

  1
  3

  2 <c end
  5 <r end
  
  */
  
  let current = node;
  let runner = current?.next;
  while (runner?.next?.next) {
    runner = runner.next.next;
    current = current.next;
  }
  if (current.next) current.next = current.next.next;
}
