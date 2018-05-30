// Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

var maximumSwap = function(num) {
  if(num === null || num < 11) {
      return num;
  }
  const digits = num.toString().split('');
  for(let i = 0; i < digits.length; i++) {
      let outer = digits[i];
      if(outer === '9'){continue}
      let biggest = 0;
      let biggestPos = null;
      for(let j = i + 1; j < digits.length; j++){
          let inner = digits[j];
          if(inner >= biggest){
              biggest = inner;
              biggestPos = j;
          }
      }
      if(biggest > outer){
          let temp = outer;
          digits[i] = biggest;
          digits[biggestPos] = temp;
          return Number(digits.join(''));
      }
  }
  return num;
};

// Idea: Go through the digits, swap the right most biggest value to get the largest value possible
// n: The number of digits in the num
// Time Complexity: O(n^2) as we may have to iterate through the whole value twice if there are no swaps to be made
// Space Complexity: O(n) as we are storing the digits in an array