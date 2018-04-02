// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

var isSameTree = function(p, q) {
    if(p === null && q === null) { return true; }
    if(p === null || q === null || p.val !== q.val) { return false; };
    
    return (isSameTree(p.left,  q.left) && isSameTree(p.right, q.right))
};

// Idea: Recursive through the tree and if there is ever a difference(only one is null or their values or different), return false. Only return true if they are all the same.
//n: The number of nodes in the tree with the fewer count of nodes
// Time Complexity: O(n) as we need to traverse through the whole tree
// Space Complexity: O(n) as well as there will be a recursive call for every node.