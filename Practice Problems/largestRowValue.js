// Find the largest value in each row in a binary tree and return them in an array

function largestValuesInTreeRows(t) {
    if(t === null) {
        return [];
    }
    let results = [];
    let queue = [[t, 0]];
    let nodes = [];
    
    while(queue.length) {
        node = queue.shift();
        nodes.push(node);
        let row = node[1];
        if(node[0].left){
            queue.push([node[0].left, row + 1]);
        }
        if(node[0].right){
            queue.push([node[0].right, row + 1]);
        }
    }
    
    let largest = nodes[0][0].value;
    let row = 0;
    
    for(let i = 0; i < nodes.length; i++) {
        let nodeVal = nodes[i][0].value;
        let nodeRow = nodes[i][1];
        if(nodeRow !== row) {
            results.push(largest);
            row++;
            largest = nodeVal;
        }
        if(nodeRow === row && nodeVal > largest) {
            largest = nodeVal;
        }
        if(i + 1 === nodes.length) {
            results.push(largest);
        }
        
    }
    
    return results;
}