class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray)
      this.addVertex(vertex);
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let neighbor of vertex.adjacent)
      this.removeEdge(vertex, neighbor);

    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {

    /*
    
      Iterative

      const nodesStack = [start];
      const nodesSeen = new Set(nodesStack);
      const listOfNodes = [];
      let currentNode;

      while (nodesStack.length) {
        currentNode = nodesStack.pop();
        listOfNodes.push(currentNode.value);

        for (let neighbor of currentNode.adjacent) {
          if (!nodesSeen.has(neighbor)) {
            nodesStack.push(neighbor);
            nodesSeen.add(neighbor);
          }
        }
      }

      return listOfNodes;

    */

    // Recursive

    const nodesSeen = new Set();
    const listOfNodes = [];

    function visitNode(vertex) {
      // console.log(nodesSeen);
      if (!vertex) {
        return null;
      }

      nodesSeen.add(vertex);
      listOfNodes.push(vertex.value);

      vertex.adjacent.forEach(neighbor => {
        if (!nodesSeen.has(neighbor)) {
          return visitNode(neighbor);
        }
      })
    }

    visitNode(start);

    return listOfNodes;


  }


  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const nodesQueue = [start];
    const nodesSeen = new Set(nodesQueue);
    const listOfNodes = [];
    let currentNode;

    while (nodesQueue.length) {
      currentNode = nodesQueue.shift();
      listOfNodes.push(currentNode.value);

      for (let neighbor of currentNode.adjacent) {
        if (!nodesSeen.has(neighbor)) {
          nodesSeen.add(neighbor);
          nodesQueue.push(neighbor);
        }
      }
    }

    return listOfNodes;
  }
}




module.exports = { Graph, Node }