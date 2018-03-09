// Find the nth Fibonacci number

const fibonacci = function(n){
    let memo = [];
    memo[0] = 0;
    memo[1] = 1;
    if(n === 1 || n === 0) {
        return memo[n];
    } else {
        for(let i = 2; i < n; i++) {
            memo[i] = memo[i - 2] + memo[i - 1];
        }
    }
    return memo[n - 1];
}

// calculate all the numbers and add them to an array, then simply return the number array position n - 1
// n: which fibonacci number desired
// Time Complexity: O(n) as you need to calculate every fibonacci number before it.
// Space complexity: O(n) as you need to store a value for each value before it

// Fibonacci with O(1) space complexity below by only keeping track of previous two values

const fibonacci = function(n) {
  let memo = [];
  two = 0;
  one = 1;
  if (n === 1 || n === 0) {
    return n;
  } else {
    for (let i = 2; i < n; i++) {
      let current = two + one;
      two = one;
      one = current
    }
  }
  return one
};

