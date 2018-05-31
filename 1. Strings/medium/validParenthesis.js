// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) {
  if (s.length < 2) {
    return false; // if the length is less than 2 there are no valid pairs
  }
  const pairs = { // store pairs for easy lookup later
    "(": ")",
    "{": "}",
    "[": "]"
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) { // Go through the string and add all left brackets to stack
    if (pairs[s[i]]) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] !== pairs[last]) { // if we reach a right bracket, pop the last off the stack and make sure it matches
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false; // if there is anything left in the stack that means there are closed braces
  }
  return true;
};

// n: The number of characters in the string
// Time Complexity: O(n) as we only iterate through the string once
// Space Complexity: O(n) worst case as we might need to store all characters in stack if none have pairs