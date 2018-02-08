// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

var NumArray = function(nums) {
    let totals = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        totals[i] = nums[i] + totals[i - 1];
    }
    this.nums = totals;
};

NumArray.prototype.sumRange = function(i, j) {
    if(i === 0) {
        return this.nums[j];
    } else {
        return this.nums[j] - this.nums[i-1]
    }
};

// when initializing the numbers array, you create a property that is an array where each index is the sum of all the previous numbers before the index. This way, when you want to find the range, you can just find the difference.