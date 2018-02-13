// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

var kthSmallest = function(root, k) {
  let value = null;
  let count = k;

  const traverse = function(node) {
    if (node.left !== null) {
      traverse(node.left);
    }
    count--;
    if (count === 0) {
      value = node.val;
      return;
    }
    if (node.right !== null) {
      traverse(node.right);
    }
  };

  traverse(root);
  return value;
};

// The smallest values in a binary search tree will always be the left most value so keep traversing to the left until there are no more. Once you reach the left most you decrease the count by one to see if that is the value you are looking for. If not it will go back up the tree decrease the count again. It will then check the right node to see if it has any left nodes as well. If it does, it will go to the very left of those. 

//n: the number of nodes in the binary search tree
// Time Complexity: O(n) worst case as you might need to search the whole tree if it is the last value
// Space complexity: O(1) as we do not store any additional variables.
