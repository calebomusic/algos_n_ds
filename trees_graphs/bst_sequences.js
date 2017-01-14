// not complete
// A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

const nodesByLevel = (root, level = 0, result = []) => {
  result[level] = (result[level] || [])

  result[level].push(root.val);

  if (root.left) {
    nodesByLevel(root.left, level + 1, result);
  }

  if (root.right) {
    nodesByLevel(root.right, level + 1, result);
  }

  return result;
}

const allSequences = (root) => {
  let result = []
  if (!root) {
    result.push([]);
    return result;
  }

  let prefix = [];
  prefix.push(root.val)

  let leftSeq = allSequences(root.left);
  let rightSeq = allSequences(root.right);

  for (var i = 0; i < leftSeq.length; i++) {
    for (var j = 0; j < rightSeq.length; j++) {
      let weaved = [];
      weave(leftSeq, rightSeq, weaved, prefix);
      result.push(weaved);
    }
  }

  return result;
}

const weave = (left, right, results, prefix) => {
  let result = [];
  if (left.length == 0 || right.length == 0) {
    result = result.concat(left).concat(right);
    return results.concat(result);
  }

  let firstLeft = left.shift();
  prefix.push(firstLeft);
  weave(left, right, results, prefix);
  prefix.pop();
  left.unshift(firstLeft);

  let firstRight = right.shift();
  prefix.push(firstRight);
  weave(left, right, results, prefix);
  prefix.pop();
  right.unshift(firstRight);
}


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val){
    this.root = this.insertVal(this.root, val);
  }

  insertVal(root, val) {
    if (!root) {
      return new Node(val);
    }
    if (root.val < val) {
      root.right = this.insertVal(root.right, val);
    } else {
      root.left = this.insertVal(root.left, val);
    }

    return root
  }
}

let bst = new BST

bst.insert(3);
bst.insert(1);
bst.insert(0);
bst.insert(2);
bst.insert(5);
bst.insert(4);
bst.insert(8);

console.log(allSequences(bst.root));
