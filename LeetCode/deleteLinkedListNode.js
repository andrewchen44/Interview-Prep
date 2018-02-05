//Delete a node in a linked list given only access to that node

var deleteNode = function(node) {
    if(node.next) {
        node.val = node.next.val;
        if(node.next.next !== undefined) {
            node.next = node.next.next;
        } else {
            node.next = null;
        }
    }
};