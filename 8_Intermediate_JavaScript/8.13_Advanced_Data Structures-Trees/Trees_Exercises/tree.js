/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function calculateTotal(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0)
          calculateTotal(child);
      }
    }

    calculateTotal(this.root);

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let evenCount = this.root.val % 2 === 0 ? 1 : 0;

    function evenHelper(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0)
          evenCount++;
        if (child.children.length > 0)
          evenHelper(child);
      }
    }

    evenHelper(this.root);

    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let numGreaterCount = this.root.val > lowerBound ? 1 : 0;

    function checkGreater(node) {
      for (let child of node.children) {
        if (child.val > lowerBound)
          numGreaterCount++;
        if (child.children.length > 0)
          checkGreater(child);
      }
    }

    checkGreater(this.root);

    return numGreaterCount;
  }
}

module.exports = { Tree, TreeNode };
