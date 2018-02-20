// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

var missingNumber = function(nums) {
    let storage = {};
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i];
        storage[number] = true;
    }
    for(let i = 0; i < nums.length + 1; i++) {
        if(!storage[i]) {
            return i;
        }
    }
};

// add all the numbers to a object and check to see which one is not found. Time complexity of O(2n) or O(n) where n is the number of distinct numbers in nums and a space complexity of O(n) as well.
