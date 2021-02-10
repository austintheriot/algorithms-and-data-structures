//return null for nonexistent peek() and pop() calls, etc.
//push(data){}
//pop(){}
//peek(){}
//min(){}

class Node {
  constructor(data, min) {
    this.data = data;
    this.min = min;
  }
}

export default class Stack {
  constructor() {
    this.array = [];
  }

  push(data) {
    const lastEl = this.array[this.array.length - 1];
    const min = lastEl ? Math.min(data, lastEl.min) : data;
    const node = new Node(data, min);
    this.array.push(node);
    return this;
  }

  pop() { 
    return this.array.pop()?.data ?? null;
  }
  
  peek() {
    return this.array[this.array.length - 1]?.data ?? null;
   }
  
  min() { 
    return this.array[this.array.length - 1]?.min ?? null;
  }
}
