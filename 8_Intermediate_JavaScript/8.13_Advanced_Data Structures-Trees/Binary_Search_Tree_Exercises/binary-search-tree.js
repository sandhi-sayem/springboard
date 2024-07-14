class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return this;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right);
    } else {
      return this;
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

    }

    return undefined;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) return undefined;

    if (val < currentNode.val)
      return this.findRecursively(val, currentNode.left);
    else if (val > currentNode.val)
      return this.findRecursively(val, currentNode.right);

    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visitedArray = [];

    function visitNode(node) {
      visitedArray.push(node.val);
      node.left && visitNode(node.left);
      node.right && visitNode(node.right);
    }

    visitNode(this.root)

    return visitedArray;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visitedArray = [];

    function visitNode(node) {
      node.left && visitNode(node.left);
      visitedArray.push(node.val);
      node.right && visitNode(node.right);
    }

    visitNode(this.root)

    return visitedArray;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visitedArray = [];

    function visitNode(node) {
      node.left && visitNode(node.left);
      node.right && visitNode(node.right);
      visitedArray.push(node.val);
    }

    visitNode(this.root)

    return visitedArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [];
    const visitedArray = [];
    let currentNode = this.root;

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      visitedArray.push(currentNode.val);

      if (currentNode.left)
        queue.push(currentNode.left);

      if (currentNode.right)
        queue.push(currentNode.right);
    }

    return visitedArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    // Todo 
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(currentNode = this.root) {
    if (!currentNode) return;
    return highestDepth(currentNode) - lowestDepth(currentNode) < 2;

    function lowestDepth(currentNode) {
      if (!currentNode) return 0;
      return Math.min(lowestDepth(currentNode.left), lowestDepth(currentNode.right)) + 1;
    }

    function highestDepth(currentNode) {
      if (!currentNode) return 0;
      return Math.max(highestDepth(currentNode.left), highestDepth(currentNode.right)) + 1;
    };
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if (!this.root || (!this.root.left && !this.root.right)) return;
    const visitedArray = [];

    function visitNode(node) {
      node.right && visitNode(node.right);
      visitedArray.push(node.val);
      if (visitedArray.length === 2)
        return;
      node.left && visitNode(node.left);
    }

    visitNode(this.root);
    return visitedArray[1] ? visitedArray[1] : undefined;
  }
}

module.exports = BinarySearchTree;
