// Write a program to find the node at which the intersection of two singly linked lists begins.

var getIntersectionNode = function(headA, headB) {
    let aLength = getLength(headA);
    let bLength = getLength(headB); // get the length of the two linked lists
    
    while(aLength > bLength) {
        headA = headA.next;
        aLength--;
    }
    while(bLength > aLength) { // move the lists so they start at the same length position
        headB = headB.next;
        bLength--
    }
    
    while(headA !== null) { // move along both lists and return intercection if any
        if(headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null; // if not, return null
};

const getLength = function(node) {
    let length = 0;
    while(node !== null) {
        node = node.next;
        length++;
    }
    return length; 
}

// m: number of nodes in first linked list
// n: numer of nodes in second linked list
// Time Complexity: O(2mn) worst case as we may need to iterate through the length of both lists twice if there are no intercetions
// Space Complexity: O(n) as we are not storing any additional information