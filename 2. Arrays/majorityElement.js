// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

var majorityElement = function(nums) {
    if(nums === null) {
        return;
    }
    if(nums.length === 1) {
        return nums[0];
    }
    let countStorage = {};
    let majority = Math.floor(((nums.length - 1) / 2)) + 1;
    
    for(let i = 0; i < nums.length; i++) { // Go through the nums array and add the count to the hashmap
        let currentNum = nums[i];
        if(countStorage[currentNum]) {
            countStorage[currentNum]++;
            if(countStorage[currentNum] >= majority) { // if the count of a number is ever grater than half the length, return that number
                return currentNum;
            }
        } else {
            countStorage[currentNum] = 1;
        }
    }
    
};

// n: number of values in the nums array
// Time Complexity: O(n) worst case as we might need to go through the whole array before we find it
// Space Complexity: O(log n) as we store the count of each element, because there is always a majority, we will alawys store less than n