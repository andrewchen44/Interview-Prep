const Node = function(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

const iterativeDepthFirstSearch = function(root, targetVal) {
    let stack = [root];
    let result = null;

    while(stack.length) {
        let node = stack.pop();
        if(node.value === targetval) {
            result = node;
        }
        if(node.right) {
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
}