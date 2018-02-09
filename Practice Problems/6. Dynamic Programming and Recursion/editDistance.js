// Compute Levenshtein distance, or edit distance, between two strings

const editDistance = function(string1, string2) {
  const l1 = string1.length;
  const l2 = string2.length;
  if(string1 === string2) {
    return 0;
  }
  if(l1 === 0) {
    return l2;
  }
  if(l2 === 0) {
    return l1;
  }
  let dp = [];
  for(let i = 0; i < l1 + 1; i++) {
    dp.push([]);
    for(let j = 0; j < l2 + 1; j++) {
      dp[i].push(0);
    }
  }  

  for(let i = 0; i < l1 + 1; i++) {
    dp[i][0] = i;
  }

  for(let j = 0; j < l2 + 1; j++) {
    dp[0][j] = j;
  }

  for(let i = 1; i < l1 + 1; i++) {
    for(let j = 1; j < l2 + 1; j++) {
      if(string1[i - 1] === string2[i - 1]) {
        dp[i][j] = dp[i-1][j-1]; // do nothing as they are the same
      } else {
        dp[i][j] = Math.min(dp[i-1][j] + 1, //deletion
                           dp[i][j-1] + 1, //insertion
                           dp[i-1][j-1] + 1); 
      }
    }
  }
  console.log(dp);
  return dp[l1][l2];
}