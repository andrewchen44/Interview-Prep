// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

var containsNearbyDuplicate = function(nums, k) {
  let n = nums.length;
  if(n === 0) {
      return false;
  }
  for(let i = n - 1; i >= 0; i--) {
      let right = nums[i];
      for(let j = i - 1; j >= 0; j--) {
          let left = nums[j];
          if(left === right && i - j <= k) {
              return true;
          }
      }
  }
  return false;
};


// n : the number of integers in the array
// Time Complexity: O(n*n) as we go through the whole array twice in the worst case
// Space complexity: O(1) as we do not use any additional space
