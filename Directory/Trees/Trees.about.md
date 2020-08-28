# Trees

## Table of Contents

- [Trees](#trees)
  - [Table of Contents](#table-of-contents)
- [About:](#about)
  - [Types:](#types)
  - [Binary Tree](#binary-tree)
  - [Binary Search](#binary-search)
  - [Steps](#steps)
  - [Runtime](#runtime)
  - [More Info](#more-info)

# About: 
- A tree node is a "leaf" if it has no children.
- It's uncommon to implement trees in interviews with a Tree class wrapper--typically candidates just use Nodes.

## Types:
- Binary Tree
- Binary Search Tree


## Binary Tree
- Each node has up to 2 children.

## Binary Search
- A binary **search** tree is a subclass of a binary tree. 
- Binary Search Tree Requirements: 
  - For every node: ALL left descendants <=  node <= ALL right descendants
  - No duplicates (sometimes)
- Equality: 
  - Binary search trees are not all the same with regard to equality: some do not allow identical children, while others say they should go on the left side, right side, or either side. Clarify this with interviewer. 
- Balanced: 
  - Balanced means more or less even distribution of values on the left and right side of the tree (such at find and insert are still guaranteed to take O(log n) time). It doesn't need to be **perfectly** balanced.
- Complete: 
  - Every level of the tree is filled except for the last level. If the last level is only partially filled, it is filled left to right.
- Full: 
  - Every node has either zero or two children. No nodes have only one child.
- Perfect:
  - All nodes are full and all leaf nodes occur at the same level. This only occurs rarely.


## Steps

## Runtime

## More Info
