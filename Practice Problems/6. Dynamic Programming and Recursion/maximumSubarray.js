
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    let max = nums[0]
    let dp = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max((dp[i - 1] + nums[i]), nums[i])
        max = Math.max(max, dp[i])
    }
    return max;
};