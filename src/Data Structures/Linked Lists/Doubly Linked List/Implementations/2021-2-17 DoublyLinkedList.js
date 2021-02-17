//implement a doubly linked list with the following functionalities:
//return undefined for nonexistent indexes, etc.

//prepend(data){}
//append(data){}
//get(index){} //return node
//find(search){} //return node
//delete(index){} //return this
//toArray(){} //create array filled with node data

class Node {
  constructor(data) {
    this.prev = null;
    this.data = data ?? null;
    this.next = null;
  }
}
export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(data) {
    const node = new Node(data);
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    }
    this.head = node;
    if (!this.tail) this.tail = node;
    return this;
  }
  append(data) {
    const node = new Node(data);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    if (!this.head) this.head = node;
    return this;
  }
  get(index) {
    if (index < 0 || !this.head) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++){
      if (!current.next) return undefined;
      current = current.next;
    }
    return current;
  }
  find(search) {
    let current = this.head;
    if (typeof search === 'function') {
      while (current) {
        if (search(current)) return current;
        else current = current.next;
      }
    } else {
      while (current) {
        if (search === current.data) return current;
        else current = current.next;
      }
    }
    return undefined;
  }
  delete(index) {
    if (index < 0) return this;

    //no nodes
    if (!this.head) return this;
    
    //one node
    if (this.head === this.tail) {
      const data = this.head;
      this.head = null;
      this.tail = null;
      return this;
    }

    //more than node
    let current = this.head;
    for (let i = 0; i < index; i++){
      if (!current.next) return this;
      else current = current.next;
    }

    //not the head or tail
    if (current.prev && current.next) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    //head
    else if (current.next) {
      this.head = this.head.next;
      this.head.prev = null;
      current.prev = null;
      current.next = null;
    }
    //tail
    else if (current.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      current.prev = null;
      current.next = null;
    }
    return this;
  }
  toArray() {
    const array = []
    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }
}
