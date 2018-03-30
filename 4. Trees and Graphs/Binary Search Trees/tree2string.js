// You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

// The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

var tree2str = function(t) {
    if(t === null) { return ''; }
    
    let results = t.val + '';
    let left = tree2str(t.left);
    let right = tree2str(t.right);
    
    if(left === '' && right === '') { return results; }
    if(left === '') { return results + wrap('') + wrap(right); }
    if(right === '') { return results + wrap(left); }
    return results + wrap(left) + wrap(right);
};

const wrap = function(string) {
    return '(' + string + ')';
}

// Idea: recurse through the tree and put children in parenthesis. If only the right child node is null, you can ommite it, otherwise wrap both children and return it.
// n: The number of nodes in the tree
// Time Complexity: O(n) as we nede to touch all nodes of the tree
// Space Complexity: O(n) as well as there will be a recursive call for each node