# Stacks and Queues

## Table of Contents

- [Stacks and Queues](#stacks-and-queues)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
    - [Stack = LIFO, last-in first-out](#stack--lifo-last-in-first-out)
    - [Queue](#queue)
  - [Steps](#steps)
  - [Runtime](#runtime)
  - [More Info](#more-info)

## About

### Stack = LIFO, last-in first-out

- Stack = LIFO, last-in first-out
- Like a stack of dinner plates
- Fundamental operations:
  - pop(), remove topmost element
  - push(), add data item to the top of the stack
- Other operations:
  - peek(), return the top of the stack
  - isEmpty(), returns true if the stack is empty

Benefits: O(1) time for adding/removing from the top of the stack. O(n) time for
retrieving the nth item. Flexible size/length.

Can be implemented as its own data structure, or can use a linked list if the
linked list adds and removes from the same side.

Useful in recursive algorithms to push() while recursing and pop() while
backtracking. Or can be used to perform a recursive algorithm iteratively.

### Queue

- Queue = FIFO, first-in first-out
- Like a line to the movie theater
- Basic operations:
  - add(), add to the end
  - remove(), remove from the front
  - peek(), return the front element
  - isEmpty(), returns true if the Queue is empty
- Double check operations that update the first/last nodes in the queue, since
  these are easily messed up.

Can be implemented as an independent data structure, or as a linked list, so
long as the elements are added and removed from opposite ends.

Used frequently in breadth-first searches or caches.

## Steps

## Runtime

## More Info
