// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

var isIsomorphic = function(s, t) {
  let sMap = {};
  let tMap = {};
  let pos = 0;
  while (pos <= s.length) {
    let sChar = s[pos];
    let tChar = t[pos];
    if (!sMap[sChar] && !tMap[tChar]) {
      sMap[sChar] = tChar;
      tMap[tChar] = sChar;
    } else if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
      return false;
    }
    pos++;
  }
  return true;
};

// Idea: Go through the strings and keeps maps of string s to string t. If ever the same character of s or t map to different characters in the other string, return false.
// n: The number of characters in either string
// Time Complexity: O(n) as we only iterate through the strings once
// Space Complexity: O(n) as we are storing the character mappings in an object.