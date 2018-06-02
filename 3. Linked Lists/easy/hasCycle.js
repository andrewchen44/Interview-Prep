// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

var hasCycle = function(head) {
    if(head === null) {
        return false;
    }
    let walker = head;
    let runner = head;
    
    while(runner.next !== null && runner.next.next !== null) {
        walker = walker.next;
        runner = runner.next.next;
        if(runner === walker) {
            return true;
        }
    }
    return false;
};

// n: number of nodes in the linked list
// Time Complexity: unknown as it depends on the list
// Space Complexity: O(1) as we are not using any additional space just pointers, could use hashmap to decrease time complexity but increase space complexity