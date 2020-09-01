# Heaps

## About

- A heap is, in essence, the maximally efficient implementation of a priority queue, where each element is added to the heap with an assigned priority (its number), and in order of its priority. 

- A heap is a good solution for problems requiring the smallest of something or the largest of something.

## Implementation

- Can either be implemented with an array or a binary tree, but it appears that min heaps are most commonly implemented with an array. 
- If implemented with a binary tree, the binary tree must be a **complete** binary tree.
- An array can be used with helper functions that rely on arithmetic to retrieve node parents and children.

## Min Heap
Two fundamental operations: 
- insert(), insert data, rearrange tree
- extractMin(), return min and remove it from the heap
- getMin(), return min

