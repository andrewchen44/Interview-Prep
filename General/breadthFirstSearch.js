const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const bradthFirstSearch = function(root, targetVal) {
    let queue = [root];
    let result = null;

    while(queue.length > 0) {
        let node = queue.shift();
        if(node.value === taretVal) {
            result = node;
        }
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
    return result;
}