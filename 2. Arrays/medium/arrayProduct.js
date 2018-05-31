/* Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.) */

var productExceptSelf = function(nums) {
  const n = nums.length;
  let results = [1]; // initialize results array with 1
  for (let i = 1; i < nums.length; i++) {
    results[i] = nums[i - 1] * results[i - 1]; // go through array and set the value at each index of the results array to the product of the values to the left of it. since we start from the beggining, we only need to multiply by the one to the left
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    results[i] *= right; // go through the array from the end this time and multiply each value in the results array to the values to the right value
    right *= nums[i]; // multiply the right value by the value in the nums array at the index
  }
  return results;
};


// n: the numbers of integers in the nums array
// Time Complexity: O(n + n) as we need to iterate through the nums array twice. once for the left and once for the right
// Space Complexity: O(n) as we need to create a results array with the same amount of values as n