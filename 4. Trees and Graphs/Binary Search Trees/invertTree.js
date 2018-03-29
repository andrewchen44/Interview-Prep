// Invert a binary tree.

// 4
// /   \
// 2     7
// / \   / \
// 1   3 6   9
// to

// 4
// /   \
// 7     2
// / \   / \
// 9   6 3   1

var invertTree = function(root) {
    if(root === null) { return root; }
    
    const invert = function(node) {
        if(node === null) { return };
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        invert(node.left);
        invert(node.right);
    }
    invert(root);
    return root;
};

// Idea: At each node, swap the left and right child node. Then call recursive function on each of the children.
// n: The number of nodes in the tree
// Time Complexity: O(n) as we only touch each node once
// Space Complexity: O(n) as we will nede a recursive call for each node
