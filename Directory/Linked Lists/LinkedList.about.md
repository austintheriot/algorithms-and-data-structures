# Linked List

## Table of Contents

- [Linked List](#linked-list)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Steps](#steps)
  - [Runtime](#runtime)
  - [More Info](#more-info)

## About

Linked Lists work well in applications (such as in a hash table) where read and write are frequent and expected to be nearly instantaneous, and where it is uncommon to need to search the LinkedList for a particular value.

There are three kinds of linked lists: 
   1. Singly linked list
   2. Doubly linked list
   3. Circular linked list

## Steps

Deleting in a Linked List: 
  1. For a given node n, point the n.prev node to n.next;
  2. Check for a null pointer
  3. Update the head or tail as necessary

## Runtime

A linked list accesses indexes in O(n) time, but can add and delete elements from the beginning in O(1) time. 



## More Info


