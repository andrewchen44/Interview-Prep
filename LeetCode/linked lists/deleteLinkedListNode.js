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

// set the provided node to the next node value and the provided node's next value to the next node's next node. time complxity of O(1) and space complexity of O(1).