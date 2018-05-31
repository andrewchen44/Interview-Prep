// Given a sorted integer array without duplicates, return the summary of its ranges.

var summaryRanges = function(nums) {
  if (nums === null || nums.length < 1) {
    return [];
  }
  if (nums.length === 1) {
    return [nums[0] + ""];
  }
  let results = [];
  let curr = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    let change = nums[i + 1] - curr[curr.length - 1];
    if (change === 1) {
      curr.push(nums[i + 1]);
    } else if (change > 1) {
      combine(results, curr);
      curr = [nums[i + 1]];
    }
  }
  if (curr.length > 0) {
    combine(results, curr);
  }
  return results;
};

var combine = function(results, input) {
  if (input.length === 1) {
    results.push("" + input[0]);
  } else {
    results.push("" + input[0] + "->" + input[input.length - 1]);
  }
};

// Idea: Go through the array and if the next value is one greater, add that to the range currently being kept track of. If it is more than 1 bigger, add the range to the results array.
// n: Number of values in the input array
// Time Complexity: O(n) as we are only iterating through the whole array once
// Space Complexity: O(n) as we may need to store all values in an array
