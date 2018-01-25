const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const depthFirstSearch = function(node, targetVal) {
    let target = null;

    if(node.value === targetVal) {
        return node;
    }

    if(node.left) {
        target = depthFirstSearch(node.left, targetVal);
    }

    if(node.right) {
        target = depthFirstSearch(node.right, targetVal);
    }

    return target;
}