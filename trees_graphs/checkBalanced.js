// Implement a function to check if a binary tree is balanced.

const isBalanced = (root) => {
  return isBalancedHelper(root).balance;
}

const isBalancedHelper = (root) => {
  if (!root) {
    return { depth: 0, balance: true};
  }

  let left = isBalancedHelper(root.left);

  if (left.balance === false) {
    return left;
  }

  let right = isBalancedHelper(root.right);

  if (right.balance === false) {
    return right;
  }

  let diff = Math.abs(left.depth - right.depth);

  if (diff > 1) {
    return { balance: false }
  } else {
    let maxDepth = Math.max(left.depth, right.depth);
    return { balance: true, depth: maxDepth + 1 };
  }
}
