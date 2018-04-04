var findMode = function(root) {
    if(root === null) { return []; }
    let counts = {};
    
    const populate = function(node) {
        if(node === null) { return; }
        if(counts[node.val] !== undefined) { 
            counts[node.val] = counts[node.val] + 1;
        } else{
            counts[node.val] = 1;
        }
        populate(node.left);
        populate(node.right);
        
    }
    populate(root);
    let buckets = [];
    for(let value in counts){
        let current = counts[value];
        if(buckets[current]){
            buckets[current].push(Number(value));
        } else {
            buckets[current] = [Number(value)];
        }
    }
    return(buckets[buckets.length - 1])
    
};

// Idea: Go through the tree and keep track of how many times each value occures. Bucket sort the occurances and return the values in the last index as they occured the most
// n: The number of nodes in the tree
// Time Complexity: O(n) as we need to go through all nodes of the tree only once
// Space Complexity: O(n) as we may nede to store as many nodes in the tree in the counts object or buckets array