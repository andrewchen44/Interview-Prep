// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Note:

// You may only use constant extra space.
// You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

var connect = function(root) {
  if (root === null) {
    return;
  }

  let mostLeft = root;
  let current = null;

  while (mostLeft.left !== null) {
    current = mostLeft;
    while (current !== null) {
      current.left.next = current.right;
      if (current.next) {
        current.right.next = current.next.left;
      }
      current = current.next;
    }
    mostLeft = mostLeft.left;
  }
};

// n: number of nodes in the tree
// Time Complexity: O(n) as we only touch each node once
// Space Compleixty: O(1) as we are modifying the tree in place