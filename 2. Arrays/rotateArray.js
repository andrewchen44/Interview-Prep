var rotate = function(nums, k) {
    let length = nums.length;
    if(k === 0 || length === 1) {
        return;
    }
    let temp = [];
    if(k > length) {
        k = k % length;
    }
    for(let i = 0; i < k; i++) {
        temp[i] = nums[length - k + i];
    }
    for(let i = 0; i + k < length; i++) {
        temp[i + k] = nums[i];
    }
    for(let i = 0; i < length; i++) {
        nums[i] = temp[i];
    }
};

// n: the number of elements in the nums array
// Time Complexity: O(2n) as we iterage over the array twice
// Space Complexity: O(n) as we store all values in an additional array