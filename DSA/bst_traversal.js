class Node{
    constructor(data, left = null, right=null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root; // reference to the root
    if (node === null) {
      // if this is the first node to be added
      this.root = new Node(data);
      return;
    } else {
      // we need to figure out where to put this data into
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    // finding minimum. we should travel to the left until there's no more subtree
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    // finding maximum. keep traveling to the right until there's no more subtree
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
  isPresnet(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // if node has no left child
        if (node.left == null) {
          return node.right;
        }
        // if node has no right child
        if (node.right == null) {
          return node.left;
        }
        //if node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // now the node we were planning to remove has been replaced with tempNode.data
        node.data = tempNode.data;
        // below recursion removed the original tempnode.data!
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  //finding the minimum height of the tree
  findMinHeight(){

  }
}

const bst = new BST();
bst.add(9)
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);
