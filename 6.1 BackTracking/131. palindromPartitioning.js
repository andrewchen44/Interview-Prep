// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.
// For example, given s = "aab",
// Return
// [["aa","b"],["a","a","b"]]

var partition = function(s) {
    if(s === '') { return []; } // return nothing an empy array if string is empty
    let results = []; //initialize results array
    
    const generate = function(set, index) { // declare recursive function 
        if(index === s.length) { //base case: when the index is equal to the string length, we have reached the end and we add the set to the results
            results.push(set);
            return;
        }
        for(let i = index; i < s.length; i++) { // go through all substrings starting at the index
            let leftSub = s.substring(index, i + 1); 
            if(isPalindrome(leftSub)){ // if the  substring is a palindrome
                let newSet = set.slice();
                newSet.push(leftSub);
                generate(newSet, i+1); // call recursive function on the rest of the string with the substring added to the set
            }
        }
    }
    generate([], 0);
    return results;
};

const isPalindrome = function(string) { // helper function to dertermine whether or not a string is a palindrome
        let length = string.length;
        let mid = Math.floor(length/2);
        for(let i = 0; i < mid; i++) {
            if(string[i] !== string[length - i - 1]){
                return false;
            }
        }
    return true;
}
