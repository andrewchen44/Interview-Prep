// Compute Levenshtein distance, or edit distance, between two strings

const editDistance = function(string1, string2) {
  const l1 = string1.length;
  const l2 = string2.length;// assign lengths to variables for convenience later
  if(string1 === string2) {
    return 0; // return 0 if the strings are equal as no changes are needed
  }
  if(l1 === 0) {
    return l2; // return the second string if the first one is nothing
  }
  if(l2 === 0) {
    return l1; // return the first string if the second one is nothing
  }
  let dp = []; // initializing dp array
  for(let i = 0; i < l1 + 1; i++) {
    dp.push([]); // add an empty array for each character in the first string
    for(let j = 0; j < l2 + 1; j++) {
      dp[i].push(0); // add as many 0s to each array as there are characters in the second string
    }
  }  // this creates a 2d agree of l1 rows and l2 columns

  for(let i = 0; i < l1 + 1; i++) {
    dp[i][0] = i; // initialize the first column with 0 - l2, represents number of edits it would require if l2 was nothing
  }

  for(let j = 0; j < l2 + 1; j++) {
    dp[0][j] = j; // initialize the first row with 0 - l1, represents number of edits required if l1 was nothing
  }

  for(let i = 1; i < l1 + 1; i++) {
    for(let j = 1; j < l2 + 1; j++) { // go through the 2d array
      if(string1[i - 1] === string2[i - 1]) { // if the string characters are the same
        dp[i][j] = dp[i-1][j-1]; // take the value of cell up and left one, acts as if this one was not even counted as the edit distance of the same characters will be 0
      } else {
        dp[i][j] = Math.min(dp[i-1][j] + 1, //deletion
                           dp[i][j-1] + 1, //insertion
                           dp[i-1][j-1] + 1); // if the previous characters were the same, that distance will be lesser and should be used in the calculation
      }
    }
  }
  return dp[l1][l2]; // return the last value as that is the minimum for both full strings
}