// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.

// Note:
// The relative order inside both the even and odd groups should remain as it was in the input. 
// The first node is considered odd, the second node even and so on ...

var oddEvenList = function(head) {
    if(head === null) {
        return head;
    }
    let oddTail = head;
    let evenHead = head.next;
    let evenTail = head.next;
    
    while(evenTail !== null && evenTail.next !== null) {
        oddTail.next = evenTail.next;
        oddTail = oddTail.next;
        evenTail.next = oddTail.next
        evenTail = evenTail.next;
    }
    oddTail.next = evenHead
    return head
};

// Have two pointers and go through the linked list. Set the next of the odd's tail to the next of the even tail then set the next of the even tail to the next of the odd tail. The move both pointers to their respective next nodes. Keep doing this while the even tail isn't null and the even tail's next isn't null.

//n: number of nodes in the linked list
// Time complexity: O(n) as we only go through the linked list once
// Space Complexity: O(1) as we are not using any additional space we are modifying the list in place