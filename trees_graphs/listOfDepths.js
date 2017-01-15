// Given a binary tree, design an algorithm which creates a linked list of
// all the nodes at each depth

const listOfDepths = (root, level = 0, result = []) => {
  if (root) {
    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(root.val);

    listOfDepths(root.left, level + 1, result);
    listOfDepths(root.right, level + 1, result);
  }

  return result;
}

class Root {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
