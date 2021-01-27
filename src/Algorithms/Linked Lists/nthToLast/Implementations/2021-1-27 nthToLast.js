/*  

  Implement an algorithm to return the nth to last node in a linked list.
  Return null for nonexistent nodes.

*/

export default function nthToLast(linkedList, n) {
  /* 
  
  2nd to last

  0 <-- curent start
  1
  2 <-- runner
  3
  4
  5 <-- expected current
  6
  7 <-- expected runner
  
  
  */

  if (n < 0) return null;

  let current = linkedList.head;
  let runner = linkedList.head;
  for (let i = 0; i < n; i++) {
    if (!runner.next) return null;
    runner = runner.next;
  }

  while (runner.next) {
    current = current.next;
    runner = runner.next;
  }

  return current;
}
