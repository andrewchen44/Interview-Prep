const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const depthFirstSearch = function(node, targetVal) {
    let leftSide = null;
    let rightSide = null;
    if(node.value === targetVal) {
        return node;
    }
    if(node.left) {
        leftSide = depthFirstSearch(node.left, targetVal);
    }
    if(node.right) {
        rightSide = depthFirstSearch(node.right, targetVal);
    }
    return leftSide || rightSide;
}