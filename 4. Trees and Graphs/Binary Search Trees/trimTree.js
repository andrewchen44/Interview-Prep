// Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

var trimBST = function(root, L, R) {
    if(root === null) { return null; }
    
    if(root.val < L) { return trimBST(root.right, L, R); }
    if(root.val > R) { return trimBST(root.left, L, R); }
    
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
};

// Idea: If the node value is less than the lower bound, only a node to the right could possibly be allowed in the tree. If the node is in the higher bound, only a node to the left could be allowed in the tree so we recurse on that side. Keep going until you reach a value with a value in the range or null and return that up.
// n: The number of nodes in the tree;
// Time Complexity: O(n) as we need to go through all the nodes
// Space Complexity: O(n) as well as there are as many recursive calls as there are nodes in the tree