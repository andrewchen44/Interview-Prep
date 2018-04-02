// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root. Note: The length of path between two nodes is represented by the number of edges between them.
// Example 1 Input:

//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output:2
// Example 2 Input:

//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output: 2
var longestUnivaluePath = function(root) {
    let longest = 0;
    if(root === null) { return longest;}
    
    const traverse = function(node, prev){
        if(node === null) { return 0 };
        let left = traverse(node.left, node.val);
        let right = traverse(node.right, node.val);
        
        longest = Math.max(longest, left + right);
        left = node.val === prev ? left + 1 : 0;
        right = node.val === prev ? right + 1: 0;
        
        return Math.max(left, right);
        
    }
    traverse(root, null);
    return longest;
};

// Idea: At each node, check to see how many children macth the parent value. Only take the longest of the path and return that value, constantly checking against the longest path.
// n : the number of nodes in the tree
// Time Complexity: O(n) as we touch each node of the tree once
// Space Complexity: O(n) as well as there is a recursive call for each node