// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

var mergeTrees = function(t1, t2) {
    if(t1 === null && t2 === null) { return null; }
    let val1 = t1 !== null ? t1.val : 0;
    let val2 = t2 !== null ? t2.val : 0;
    let newNode = new TreeNode(val1 + val2);
    newNode.left = mergeTrees(t1 === null ? null : t1.left, t2 === null? null : t2.left);
    newNode.right = mergeTrees(t1 === null? null : t1.right, t2 === null? null : t2.right);
    return newNode;
};

// Idea: Create a new tree, set the left and right nodes to the sum of the two tree values if they have any. Recurse until both are null.
// M and n: the number of nodes in t1 and t2
// Time Complexity: O(m + n) as we need to traverse both trees
// Space Compleixty: O(m + n) as there will be a recursive call for as many nodes as the tree with the most nodes