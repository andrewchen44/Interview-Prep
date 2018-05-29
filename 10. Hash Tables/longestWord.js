// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

// If there is no answer, return the empty string.


var longestWord = function(words) {
  let dictionary = {};
  let results = [];
  words.forEach((word) => {
      dictionary[word] = word;
  })
  
  words.forEach((word) => {
      let buildable = true;
      for(let i = 1; i < word.length; i++){
          let subWord = word.slice(0, i);
          if(!dictionary[subWord]){
              buildable = false;
              break;
          }
      }
      if(buildable) {
          results.push(word)
      }
  })
  results.sort((a, b) => {
      return b.length - a.length;
  })
  let maxLength = results[0].length;
  results = results.filter(word => word.length === maxLength)
  results.sort();
  return results[0];
};

// idea: add all the words into a hash table. Go through each word and and check if it's it can be build one character at a time. If it can, add it to the results array. Filter out all the words in the results array that are not equal to the max length. Sort the results array one more time so that the lexigraphically smallest is first and return that value
// n: The number of words in n
// Time Complexity: at least O(n log n) as we are sorting the values
// Space Complexity: O(n) as we are storing the values in both a hash table and results array 