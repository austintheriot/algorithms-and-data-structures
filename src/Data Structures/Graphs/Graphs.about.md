# Graphs

## Table of Contents

- [Graphs](#graphs)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
    - [Terminology](#terminology)
    - [Most Common Representations](#most-common-representations)
    - [Most Common Searches](#most-common-searches)

## About

### Terminology
- Node === vertex
- Edge === arc 
- Path === a collection of nodes and edges
- Directed edge === one-way street
- Undirected edge === two-way street
- Connected graph === there is a path to every node on the graph
- Cycle === a path that starts and ends at the same vertex/node

### Most Common Representations
- Adjacency List 
  - This is the most common method of representing a graph
  - Every node stores a list of adjacent nodes
    - This can be done with Graph and Node classes, or with a simple array with data at each index that points to the other indexes (nodes), etc.
    - This tends to be more computationally efficient when searching, etc.
- Adjacency Matrix
  - N x N matrix, where N is the number of nodes
  - Each cell in the matrix represents an edge between two nodes
  - Edges can be 1 or 0, or can be a number representing the weight of the edge
  - Pros:
    - Lookups take O(1) time
    - Removing an edge takes O(1) time
  - Cons: 
    - Adding node takes O(n<sup>2</sup>) time?? 
    - Space takes O(n<sup>2</sup>) space?? 

### Most Common Searches
- Depth-First Search (DFS)
  - Simpler 
  - Good for visiting every node in a graph
  
- Breadth-First Search (BFS)
  - Better for finding a path between 2 nodes, or for finding the shortest path between 2 nodes

- Bidirectional Search