/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelper(node.right) + 1;
      if (node.right === null) return minDepthHelper(node.left) + 1;
      return Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1;
    }

    return minDepthHelper(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      return Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1;
    }

    return maxDepthHelper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let maximum = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftMaximum = maxSumHelper(node.left);
      const rightMaximum = maxSumHelper(node.right);
      maximum = Math.max(maximum, node.val + leftMaximum + rightMaximum);
      return Math.max(0, leftMaximum + node.val, rightMaximum + node.val);
    }

    maxSumHelper(this.root);

    return maximum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let smallest = Infinity;

    function nextLarger(node) {
      if (node === null) return;

      if (node.val > lowerBound && node.val < smallest)
        smallest = node.val;

      nextLarger(node.right);
      nextLarger(node.left);
    }

    nextLarger(this.root);

    return smallest < Infinity ? smallest : null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;

    function cousinHelper(targetNode, currentNode, level = 0) {
      if (!currentNode) return;

      if (currentNode.left === targetNode || currentNode.right === targetNode) return [currentNode, level + 1];

      const left = cousinHelper(targetNode, currentNode.left, level + 1);
      const right = cousinHelper(targetNode, currentNode.right, level + 1);

      if (left) return left;
      if (right) return right;

    }

    const node1Info = cousinHelper(node1, this.root);
    const node2Info = cousinHelper(node2, this.root);

    if (!node1Info || !node2Info) return false;

    return node1Info[0] !== node2Info[0] && node1Info[1] === node2Info[1];

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const stringTree = [];

    function serializeHelper(node) {
      if (node) {
        stringTree.push(node.val)
        serializeHelper(node.left);
        serializeHelper(node.right);
      } else
        stringTree.push('~');
    }

    serializeHelper(tree.root);
    return stringTree.join(',');
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (!stringTree) return null;

    const iterateArray = stringTree.split(',').values();

    function deserializeHelper() {
      const { value, done } = iterateArray.next();

      if (value === '~' || done) return null;

      const node = new BinaryTreeNode(+value)
      node.left = deserializeHelper();
      node.right = deserializeHelper();

      return node;
    }

    const root = deserializeHelper();

    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode = this.root) {

    if (currentNode === null) return null;

    if (currentNode === node1 || currentNode === node2) return currentNode;

    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    if (left !== null && right !== null) return currentNode;

    return left !== null ? left : right;

  }
}


module.exports = { BinaryTree, BinaryTreeNode };
