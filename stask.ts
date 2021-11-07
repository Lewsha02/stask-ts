interface ObjectType<T> {
  [key: number]: T;
}

class Stack<T> {
  private stack: ObjectType<T>;
  private count: number;

  constructor() {
    this.stack = {};
    this.count = 0;
  }

  push(value: T) {
    this.stack[this.count] = value;
    this.count++;
  }

  pop(): T {
    this.count--;
    const value = this.stack[this.count];
    delete this.stack[this.count];
    return value;
  }

  peek(): T {
    return this.stack[this.count - 1];
  }
}
