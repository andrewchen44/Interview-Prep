// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) {
        return s.length;
    } 
    let map = {};
    let leftPointer = 0;
    let maxLength = 1;
    for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        
        let currentCharacter = s[rightPointer];
        if(map[currentCharacter] === undefined) {
            map[currentCharacter] = rightPointer;
        } else {
            leftPointer = Math.max(leftPointer, map[currentCharacter] + 1);
            map[currentCharacter] = rightPointer;

        }
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1)
    }
    return maxLength;
};

// Need to use a hashmap and two pointers. As the right pointer goes through the string, it puts the character and position if it is not already found in the map. If it has been found already, move the left  pointer  to the position + 1 of where it was found last or where the current left pointer is, whichever is bigger. 