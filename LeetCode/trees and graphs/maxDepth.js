// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if(root === null) {
        return 0;
    } else {
        return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
    }
};

// recurse down the tree and add one for each level it goes down. Has a time complexity of O(n), where n is the number of nodes, as it has to touch each node. It has a space complexity of O(n) as well because there is a recursive call for each node.