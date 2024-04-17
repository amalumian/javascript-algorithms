class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  getKey() {
    return this.key ?? null;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  search(key) {
    if (key === this.key) {
      return this;
    }

    if (key > this.key && this.getRight()) {
      return this.getRight().search(key);
    }

    if (key < this.key && this.getLeft()) {
      return this.getLeft().search(key);
    }

    return null;
  }
}

const tree = new Node(9,
  new Node(4,
    new Node(3),
    new Node(6,
      new Node(5),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      new Node(20),
      null)));
 
const node = tree.search(6);
node.getKey(); // 6
node.getLeft().getKey(); // 5
node.getRight().getKey(); // 7
 
tree.search(35); // null
tree.search(3).getLeft(); // null

