// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
  if (nums === null || nums.length < 1) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let prev = nums[i - 1];
    let next = nums[i + 1];
    if (prev === curr && next === curr) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};


// Idea: Because the array is sorted, all numbers of the same value will be right next to each other. We iterate through the array until we see the second occurance of the value. Check to see if the value after is the same as well and keep removing it until it is not. This ensures that only two of the same value are ever there.
// n: The number of values in nums
// Time Complexity: O(n) as we need to iterate through the whole array to check it
// Space Complexity: O(1) as we are not using any additional space and modifying it in place