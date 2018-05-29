// Given a list of non negative integers, arrange them such that they form the largest number.

var largestNumber = function(nums) {
  let results = "";
  if (nums.length === 0) {
    return results;
  }
  let numStrings = nums.map(digit => {
    return digit.toString();
  });
  let sorted = numStrings.sort((a, b) => {
    let sum1 = a + b;
    let sum2 = b + a;
    return sum2 - sum1;
  });
  if (sorted[0] === "0") {
    return "0";
  }
  sorted.forEach(digit => {
    results += digit;
  });
  return results;
};

// Idea: Sort the numbers in the way so that the number that would make for a larger overall number is before the smaller. Add the sorted values to string
// n: The number of digits in nums
// Time Complexity: O(nlogn) as we need to sort the values
// Space Complexity: O(n) as we are storing the sorted values in an array

