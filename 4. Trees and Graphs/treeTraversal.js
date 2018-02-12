// Traverse a binary search tree and return its nodes in an array ordered by depth

function traverseTree(t) {
    if(t === null) {
        return [];
    }

    let queue = [t];
    let results = [];
    
    while(queue.length) {
        let node = queue.shift();
        results.push(node.value);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right)
        }
        
    }
    
    return results;

}

