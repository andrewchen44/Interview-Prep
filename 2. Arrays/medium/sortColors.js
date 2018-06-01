// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

var sortColors = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (nums[right] !== 0 && right > 0) {
      right--;
    }
    while (nums[left] === 0) {
      left++;
    }
    if (left <= right) {
      swap(nums, left, right);
    }
  }
  right = nums.length - 1;

  while (left < right) {
    while (nums[left] === 1) {
      left++;
    }
    while (nums[right] !== 1 && right > 0) {
      right--;
    }
    if (left <= right) {
      swap(nums, left, right);
    }
  }
};

const swap = function(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
};
