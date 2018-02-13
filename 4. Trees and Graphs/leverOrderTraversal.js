// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

var levelOrder = function(root) {
    if(root === null) {
        return []; // return nothing if root is null
    }
    let results = [];
    let queue = [];
    queue.push([root,1]) // add the root to the queue and the level (1)
    while(queue.length > 0) {
        let nodeTouple = queue.pop(); // pop the last node in the queue
        let node = nodeTouple[0];
        let nodeLevel = nodeTouple[1];
        if(node.right) {
            queue.push([node.right, nodeLevel + 1]); // if the node has a right, push it into the queue
        }
        if(node.left) {
            queue.push([node.left, nodeLevel + 1]); // if the node has a left, push it into the queue
        }
        if(results[nodeLevel - 1]) {
            results[nodeLevel - 1].push(node.val); // if the results array already has nodes at that level, push it into the array
        } else {
            results[nodeLevel - 1] = [node.val]; // otherwise, create an array with the nodes value
        }
    }
    return results; // return the results array
};

// n: number of nodes in the tree
// Time Complexity: O(n) as we only traverse the tree once
// Space Complexity: O(n) as we store n many values in the results array.