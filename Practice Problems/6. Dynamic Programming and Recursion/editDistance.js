// Compute Levenshtein distance, or edit distance, between two strings

const editDistance = function(string1, string2) {
  if(string1 === string2) {
    return 0;
  }
  if(string1.length === 0) {
    return string2.length;
  }
  if(string2.lenght === 0) {
    return string1.length;
  }

  let dp = [];
  for(let i = 0; i < string1.length + 1; i++) {
    dp.push([]);
    for(let j = 0; j < string2.length + 1; j++) {
      dp[i].push(0);
    }
  }  

  for(let i = 0; i < string1.length + 1; i++) {
    dp[i][0] = i;
  }

  for(let j = 0; j < string2.length + 1; j++) {
    dp[0][j] = j;
  }

  for(let i = 1; i < string1.length + 1; i++) {
    for(let j = 1; j < string2.length + 1; j++) {
      if(string1[i - 1] === string2[i - 1]) {
        d[i][j] = d[i-1][j-1]; // do nothing as they are the same
      } else {
        d[i][j] = Math.mix(d[i-1][j] + 1, //deletion
                           d[i][j-1]) + 1; //insertion
      }
    }
  }
  return dp[string1.length][string2.length];
}