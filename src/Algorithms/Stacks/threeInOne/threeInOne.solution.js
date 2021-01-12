/* 

  How would you implement a stack using a single array?

*/

/* 

  Do we know the maximum size of the stacks beforehand?
    Yes:
    1)
      Combine the maximum size of the stacks to get the array length.
      Divide the array into three parts corresponding to the size of each stack.
        Pros: simpler implementation.
        Cons: one stack could be full, while the others could be completely empty.

    No:
    2) 
      Declare an array of fixed size.
      Divide the array into three equal parts. 
      When a stack becomes too large for its allotment, increase the size of the array 
      and move the stacks over.
        Pros: more flexibility when it comes to filling up the stacks.
        Cons: more compelx implementation.

*/
