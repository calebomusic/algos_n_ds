// Create a MyQueue class that implements a queue with two stacks.

class MyQueue {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(el) {
    this.in.push(el);
    return el;
  }

  dequeue() {
    if (this.out.length === 0) {
      this.configureOutStack();
    }

    return this.out.pop();
  }

  configureOutStack() {
    while(this.in.length > 0) {
      this.out.push(this.in.pop());
    }
  }
}

var q = new MyQueue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
