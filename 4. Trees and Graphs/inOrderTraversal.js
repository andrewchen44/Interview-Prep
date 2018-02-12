// Given a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
  if (root === undefined) {
    return [];
  }
  let results = [];
  let currentNode = root;
  let stack = [];

  while (stack.length > 0 || currentNode !== null) { // while there is still something in the stack or the current node isn't null
    while (currentNode !== null) {
      stack.push(currentNode); // if the current node is a valid node, push it to the stack
      currentNode = currentNode.left; //set the current node to the left value (this will keep traversing left until there is no more left values)
    }

    currentNode = stack.pop(); // once there are no more values pop off the last node from the stack
    results.push(currentNode.val); // add that value to results as it is the most left that hasn't been added
    currentNode = currentNode.right; // set current node to right to start seeing if the right ones have any left nodes
  }
  return results;
};

// n : the number of nodes in the tree
// Time complexity: O(n) as we need to traverse the whole tree only once
// Space complexity: O(n + n) worst case as we may need to store all n values if all the branches are to the left and we have to store the values of all nodes in the tree
