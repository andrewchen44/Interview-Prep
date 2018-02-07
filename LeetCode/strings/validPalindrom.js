// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function(s) {
    if(s === "") {
        return true;
    }
    
    let sArray = s.split('');
    let characters = [];
    // go through characters and push only alpha numeric to characters arrays
    for(let i = 0; i < sArray.length; i++) {
        let character = sArray[i].toLowerCase();
        if(character >= 'a' && character <= 'z' || character >= '0' && character <= '9') {
            characters.push(character);
        }
    }
    //make sure second half is same as first half
    for(let i = 0; i < Math.floor(characters.length/2); i++) {
        let left = characters[i];
        let right = characters[characters.length - 1 - i];
        if(left !== right) {
            return false;
        }
    }
    return true;
};

// If n is the number of characters in the string, this function has a time complexity of O(n) + O(n/2), because O(n) is the dominiant operation it is O(n) overall. It has a space complxity of O(n) as well because we are creating an array with all the characters