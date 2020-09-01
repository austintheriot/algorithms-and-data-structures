# Heaps

## About

- A heap is, in essence, the maximally efficient implementation of a priority queue, where each element is added to the heap with an assigned priority (its number), and then retrieved again in order of its priority. 

- A heap is a good solution for problems requiring the smallest of something or the largest of something.

## Implementation

- Can either be implemented with an array or a binary tree, but it appears that min heaps are most commonly implemented with an array. 
- If implemented with a binary tree, the binary tree must be a **complete** binary tree.
- An array can be used with helper functions that rely on arithmetic to retrieve node parents and children. This works, because the ordering of a complete binary tree fills up elements in the same order an array would (from first to last). 
- Using an array eases the burden of managing node pointers when swapping nodes.

## Min Heap
Fundamental operations: 
- insert()
- extractMin()
- getMin()


## Implementation: 
- Insert:
  - Insert element in the lowest, rightmost free node (the end of the array)
  - Compare with parent node and swap if smaller than parent
  - Repeat until the node is less than children but greater than parent (in a min-heap)
- Extract Min:
  - Return the topmost element (first element in the array).
  - Replace the top element with the lowest, rightmost free node (the end of the array)
  - Compare the current node with both children. If parent is larger than either (in a min-heap), swap with the smallest child 
  - Repeat until the node is smaller than children but greater than parent (in a min-heap)

## Runtime

- getMin() = O(1)
- insert() = O(log n)
- extractMin() = O(log n)