// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

var numSubarrayProductLessThanK = function(nums, k) {
  if (nums.length < 2) {
    return nums.length;
  }
  let product = 1;
  let count = 0;

  for (let lPointer = 0, rPointer = 0; rPointer < nums.length; rPointer++) {
    product *= nums[rPointer];
    while (lPointer <= rPointer && product >= k) {
      product /= nums[lPointer];
      lPointer++;
    }
    count += rPointer + 1 - lPointer;
  }
  return count;
};

// start at the beggining and keep moving the right pointer until the product is greater than k, everytime you move and the product is less than k, add right - left + 1 to the count as every new value introduces that many new subarrays.

// n: the number of elements in the array
// Time Complexity: O(n) as we iterate through the array twice at most
// Space Complexity: O(1) as we are not using any additional space only pointer

