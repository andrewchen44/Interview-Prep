// Find the first substring occurance without using indexof

function findFirstSubstringOccurrence(s, x) {
  for(let i = 0; i < s.length; i++) {
      if(s[i] === x[0] && x === s.slice(i, i + x.length)){
          return i;
      }
  }
  return -1;
}
