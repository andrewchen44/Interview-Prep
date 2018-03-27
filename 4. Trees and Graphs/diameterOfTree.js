// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

var diameterOfBinaryTree = function(root) {
    let max = 0;
    const dive = function(node) {
        if(node === null) { return 0; }
        let left = dive(node.left);
        let right = dive(node.right);
        
        max = Math.max(max, left + right);
        
        return Math.max(left, right) + 1
    }
    dive(root);
    return max;
};

// Idea: at each node, calculate the max diameter, which is the depth of left and right + 1 and compare it to the curernt max. 
// n: The number of nodes in the tree
// Time Complexity: O(n) as we are only touching each node once
// Space Complexity: O(1) as we are not using any additional space