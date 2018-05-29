// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
  if (nums === null || nums.length === 0) {
    return; // return if the input is null or there isn't anything
  }
  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) { // go through the nums array and shift all none zeroes forward
    if (nums[i] !== 0) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }
  while (currentIndex < nums.length) { // add 0s to the end of the array`
    nums[currentIndex] = 0;
    currentIndex++;
  }
};

// n: the number of integers in nums
// Time Complexity: O(n + logn) as we only iterate through the whole array once and then add on the additional 0s
// Space complexity: O(1) as we are modifying the array in place and not storing any additional values