class Node {
  constructor() {
    this.key = null;
    this.right = null;
    this.left = null;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  insert(key) {
    if (this.key === null) {
      this.key = key;
    }

    if (key > this.key) {
      if (!this.right) {
        this.right = new Node();
      }
      this.right.insert(key);
    }

    if (key < this.key) {
      if (!this.left) {
        this.left = new Node();
      }
      this.left.insert(key);
    }
  }
}

const tree = new Node();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);
 
tree.getKey(); // 9
tree.getLeft().getKey(); // 4
tree.getRight().getKey(); // 17
tree.getLeft().getLeft().getKey(); // 3
tree.getLeft().getRight().getKey(); // 6

