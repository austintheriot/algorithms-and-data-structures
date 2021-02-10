/*  

  Implement an algorithm to return the nth to last node in a linked list (0 indexed).
  Return null for nonexistent nodes.

  Example: 

  0th to last:
  0 1 2 3 4 (5)

  2nd to last:
  0 1 2 (3) 4 5

*/

export default function nthToLast(linkedList, n) {

  /* 
  3rd to last
  0 1 2 3 (4) 5 6

  0 <c, <r
  1
  2 
  3 <r / <c
  4 
  5
  6 < r

  1st to last (last)
  0 1 2 3 4 5 (6)

  0 <c
  1 <r
  2
  3
  4
  5 <c
  6 <r

  */
  
  if (n < 0) return null;
  
  let current = linkedList.head;
  let runner = current;

  for (let i = 0; i < n; i++){
    if (!runner.next) return null;
    runner = runner.next;
  }

  while (runner.next) {
    current = current.next;
    runner = runner.next;
  }

  return current;
}
