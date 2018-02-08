// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
    let storage = {};
    for(let i = 0; i < s.length; i++) {
        let character = s[i];
        if(!storage[character]){
            storage[character] = [1,i]
        } else {
            storage[character][0]++
        }
    }
    let letters = Object.keys(storage);
    for(let i = 0; i < letters.length; i++) {
        let character = storage[letters[i]];
        if(storage[letters[i]][0] === 1) {
            return character[1];
        }
    }
    return -1;
};

// go through string and store the index the first time it occurs and increase the count every other time. Then go through all the stored values and see which one has a count of 1 first and return the index. The worst case run time is O(n + n) or just O(n), where n is the number of characters in the string s, because the function iterates through the the whole string once and then iterates through all values in storage as well. Space complexity of O(n) as we are creating a storage object for all characters.