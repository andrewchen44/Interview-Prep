// Given a singly linked list, determine if it is a palindrome.

// Follow up:
// Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
  if (head === null) {
    return true;
  }
  let walker = head;
  let runner = head;
  while (runner !== null && runner.next !== null) {
    walker = walker.next;
    runner = runner.next.next;
  }
  if (runner !== null) {
    walker = walker.next;
  }
  walker = reverse(walker);
  runner = head;
  while (walker !== null) {
    if (walker.val !== runner.val) {
      return false;
    } else {
      walker = walker.next;
      runner = runner.next;
    }
  }
  return true;
};

const reverse = function(head) {
  let prevNode = null;
  let newHead = head;
  while (newHead !== null) {
    let next = newHead.next;
    newHead.next = prevNode;
    prevNode = newHead;
    newHead = next;
  }
  return prevNode;
};

// Go through the linked list with a runner and a walker to find the middle. Reverse the second half of the linked list. Go through the reversed linked and and head of original list and if they don't match return false.

// n: The number of nodes in the linked list
// Time Complexity: O(n) because we have to go through both halves of the linked list.
// Space Complexity: O(1) because we are not using any additonal space.