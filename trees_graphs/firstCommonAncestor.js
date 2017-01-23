// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
// Avoid storing additional nodes in a data structure.

// with links to parent

const firstCommonAncestor = (nodeA, nodeB) => {
  let [deep, shallow, diff] = configureDepth(nodeA, nodeB);

  for(let i = 0; i < diff; i ++) {
    deep = deep.parent;
  }

  while(deep !== shallow) {
    deep = deep.parent;
    shallow = shallow.parent;
  }

  return deep;
}

const configureDepth = (nodeA, nodeB) {
  let depthA = depth(nodeA);
  let depthB = depth(nodeB);
  let diff = Math.abs(lenA, lenB);
  let [deep, shallow] = depthA > depthB ? [depthA, depthB] : [depthB, depthA];
  return [deep, shallow, diff];
}

// without links to parent
const firstCommonAncestor = (nodeA, nodeB, root) => {
  if(!root) {
    return { a: false, b: false, ancestor: null };
  }

  let left = firstCommonAncestor(root.left);

  if(left.a && left.b) {
    return left;
  }

  let right = firstCommonAncestor(root.right);

  if(right.a && right.b) {
    return right;
  }

  if((right.a && left.b) || (right.b && left.a)) {
    return { a: true, b: true, ancestor: root};
  }

  result = right.a ? right : right.b ? right : left;

  if(root.val === nodeA.val) {
    result['a'] = true;
  } else if(root.val === nodeB.val) {
    result['b'] = true;
  }

  if(result.a && result.b) {
    result['ancestor'] = root;
    return result;
  } else {
    return result;
  }
}
