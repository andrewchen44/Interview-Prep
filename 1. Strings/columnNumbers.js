// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

var titleToNumber = function(s) {
  let results = 0;
  for (let i = 0; i < s.length; i++) {
    let base = "A";
    let currentCharacter = s[i];
    results =
      results * 26 + (currentCharacter.charCodeAt() - base.charCodeAt() + 1);
  }
  return results;
};

// Go through the string and multiple the value by 26 + how much greater it is than 'A'
// n: the number of characters in s
// Time Complexity: O(n) as we iterate through the string once
// Space Complexity: O(1) as we do not store any information