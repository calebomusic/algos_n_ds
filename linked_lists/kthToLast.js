// Implement a function which returns the kth to last node of a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const kthToLast = (head, k) => {
  let runnerA = head;
  let runnerB = head;

  for(let i = 0; i < k; i ++) {
    runnerA = runnerA.next;
  }

  while(runnerA.next) {
    runnerA = runnerA.next;
    runnerB = runnerB.next;
  }

  return runnerB;
}
