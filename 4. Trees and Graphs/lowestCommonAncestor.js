// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

var lowestCommonAncestor = function(root, p, q) {
    if(root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q) 
    } else if(root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root;
    }
};

// Idea: While the root value is greater than or less than BOTH target node values, recurse on the left side if greater than both and right side is less than both. When the root is in between or equal, that means it is the lowest common ancestor
// n : Number of nodes in the tree
// Time Complexity: O(logn) as we are only searching half at a time
// Space Complexity: O(logn) as there are log n recursive calls because we may have to search half the tree.