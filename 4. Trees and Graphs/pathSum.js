// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

var hasPathSum = function(root, sum) {
    const findSum = function(node, currentVal) {
        if(node === null) { return false; }
        let newVal = currentVal + node.val;
        if(node.left === null && node.right === null && newVal === sum) {
            return true;
        }
        return findSum(node.left, newVal) || findSum(node.right, newVal)
    }
    return findSum(root, 0);
}

// Idea: Recurse down the tree and once you reach a leaf (no left or right children nodes) ass if the current sum equals the target sum, if it does, return true. If there are children, call recursive function on children and return the results of those.
// n: The number of nodes in the tree
// Time Complexity: O(n) as we only touch each node once
// Space Complexity: O(n) as there wll be a recursive call for each node.