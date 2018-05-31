// Find the first substring occurance without using indexof

function findFirstSubstringOccurrence(s, x) {
  for(let i = 0; i < s.length; i++) {
      if(s[i] === x[0] && x === s.slice(i, i + x.length)){
          return i;
      }
  }
  return -1;
}


// n: the number of characters in s
// Time Complexity: O(n) as we iterate through the whole array worst case
// Space Complexity: O(1) as we are not using any additional space