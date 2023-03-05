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
  findMinHeight(node = this.root){
    if(node === null){
        return -1;
    };
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right);
    if(left < right){
        return left + 1;
    }else{
        return right + 1;
    }
  }
  findMaxHeight(node = this.root){
      if(node === null){
          return -1;
      }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left > right){
        return left + 1;
    }else{
        return right + 1;
    }
  }
  isBalanced(){
      return (this.findMinHeight() >= this.findMaxHeight() -1);
  }
  //travel to the deepest left and work to the right
  inOrder(){
      if(this.root === null){
          return null;
      }else{
          let result = [];
          function traverseInOrder(node){
              node.left && traverseInOrder(node.left);
              result.push(node.data);
              node.right && traverseInOrder(node.right);
          }
          traverseInOrder(this.root);
          return result;
      }
  }
  //work by pushing left and then to the right. not necessarily in order
  preOrder(){
      if(this.root === null){
          return null;
      }else{
          let result = [];
          function traversePreOrder(node){
              result.push(node.data);
              node.left && traversePreOrder(node.left);
              node.right && traversePreOrder(node.right);
          }
          traversePreOrder(this.root);
          return result;
      }
  }
  //deepest to the root
  portOrder(){
      if(this.root === null){
          return null;
      }else{
          let result = [];
          function traversePostOrder(node){
              node.left && traversePostOrder(node.left);
              node.right && traversePostOrder(node.right);
              result.push(node.data)
          };
          traversePostOrder(this.root);
          return result;
      }
  }
  //breadthfirstsearch method!
  levelOrder(){
      let result = [];
      let q = [];
      if(this.root != null){
          q.push(this.root);
          while(q.length > 0){
              let node = q.shift();
              result.push(node.data);
              if(node.left != null){
                  q.push(node.left);
              }
              if(node.right != null){
                  q.push(node.right)
              };
          };
          return result;
      }else{
          return null;
      }
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
// bst.add(10);

console.log(bst.findMaxHeight());
console.log(bst.findMinHeight());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.portOrder());