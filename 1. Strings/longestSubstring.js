// Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

var longestSubstring = function(s, k) {
    let n = s.length;
    if(n === 0 || k === 0) { return 0; }
    if(k === 0) { return n; }
    
    let occured = {};
    let longest = 0;
    
    for(let char of s) { // poulate a hash table with how many times each character occures
        if(occured[char]){
            occured[char] += 1;
        } else {
            occured[char] = 1;
        }
    }
    
    let index = 0; // initialize starting pointer
    
    while(index < n && occured[s[index]] >= k) { index++; } // keep moving pointer right while current character appeared at least k times
    if(index === n) { return n; }  // if the pointer is at the end, the entire string has characters that appeared at least k times
    let left = longestSubstring(s.substring(0, index), k); // find the longest substring of the left half
    while(index < n && occured[s[index]] < k) { index++; } // keep moving the pointer right while the character appears less than k times
    let right = longestSubstring(s.substring(index), k); // find the longest substring on right half
    return Math.max(left, right); // return the largest of the two
};

// n: the number of characters in the input string
// Time Complexity: O(n^2) worst case as we may need to recurse for every character if every character appears less than k time. average is O(nlogn)
// Space Complexity: O(n^2) worst case as each recursive call would take up space