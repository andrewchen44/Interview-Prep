// Given an integer, write a function to determine if it is a power of three.

var isPowerOfThree = function(n) {
  let check = 3;
  for (let i = 0; Math.pow(3, i) <= n; i++) {
    if (n === Math.pow(3, i)) {
      return true;
    }
  }
  return false;
};


// Loop through all the powers of 3 until while it is less than n, if it ever equals n, return true, or else return false.
