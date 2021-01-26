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
    const min = this.array[this.array.length - 1]
      ? Math.min(this.array[this.array.length - 1].min, data)
      : data;
    this.array.push(new Node(data, min));
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
