// Find the sum of all the digits of a binar tree if a number is from root to leaf

function digitTreeSum(t) {
    let total = 0;
    if(t === null) {
        return total;
    }
    const traverse = function(node, current) {
        let nodeValue = current + node.value;
        if(!node.left && !node.right){
            total += parseInt(nodeValue);
        }
        if(node.left) {
            traverse(node.left, nodeValue);
        }
        if(node.right){
            traverse(node.right, nodeValue);
        }
    }
    traverse(t, '');
    return total;
}

