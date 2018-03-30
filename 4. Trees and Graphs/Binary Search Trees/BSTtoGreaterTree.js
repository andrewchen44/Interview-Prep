// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

var convertBST = function(root) {
    let larger = 0;
    const traverse = function(node) {
        if(node === null) { return; }
        traverse(node.right);
        node.val += larger;
        larger = node.val;
        traverse(node.left);
    }
    traverse(root);
    return root;
};

//Idea: Keep recursing to the most right of the tree (the largest value), add all that are larger (0), and set the new larger to the current nodes value. Then do this for all nodes left to it.
// n: The number of nodes in the tree
// h: The hight of the tree
// Time Complexity: O(n) as we traverse the whole tree
// Space Complexity: O(h) as we are only ever recursing as many nodes as the height of the tree at one time 