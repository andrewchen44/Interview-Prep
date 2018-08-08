// Given a binary tree containing digits from 0 - 9 only, each root - to - leaf path could represent a number.

// An example is the root - to - leaf path 1 -> 2 -> 3 which represents the number 123.

// Find the total sum of all root - to - leaf numbers.

//   Note: A leaf is a node with no children.


var sumNumbers = function (root) {
  if (root === null) {
    return 0;
  }
  let total = 0;
  const dive = (node, num) => {
    let newNum = num + node.val;
    if (!node.right && !node.left) {
      total += Number(newNum);
      return;
    }
    if (node.right) {
      dive(node.right, newNum);
    }
    if (node.left) {
      dive(node.left, newNum);
    }
  }
  dive(root, '');
  return total;

};

// Approach: Traverse the tree depth first while keeping track of the number so far in string form, once you are at the leaf, add it to the total
// n: The number of nodes in the tree
// Time Complexity: O(n) as we are touching each node once
// Space Complexity: O(n) as there will be a recursive call for each node
