// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

var averageOfLevels = function(root) {
    if(root === null) { return []; }
    let results = [];
    let queue = [root];
    
    while(queue.length > 0) {
        let sum = 0;
        let n = queue.length;
        let newQueue = [];
        for(let i = 0; i < n; i++) {
            let node = queue[i];
            sum += node.val;
            if(node.left !== null) {
                newQueue.push(node.left);
            }
            if(node.right !== null) {
                newQueue.push(node.right);
            }
        }
        results.push(sum/n)
        queue = newQueue;
    }
    return results;
};

// Idea: Go through the tree breadth first. Go through the nodes at each level and keep track of the total sum while adding children to a new queue. At the end of the level, add the average to the results and set the queue to the new queue.
// n: The number of nodes in the binary tree
// Time Complexity: O(n) as we are only touching each node of the tree once
// Space Complexity: O(logn) as we are only storing the values of the nodes at each level

