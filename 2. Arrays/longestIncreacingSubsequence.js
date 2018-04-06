// Given an unsorted array of integers, find the length of longest increasing subsequence.

// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

// Your algorithm should run in O(n2) complexity.

var lengthOfLIS = function(nums) {
    let longest = [];
    let n = nums.length;
    if(n < 2) { 
        return n;
    }
    for(let i = 0; i < n; i++) {
        longest.push(1);
    }
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            let right = nums[i];
            let left = nums[j];
            if(left < right){
                longest[i] = Math.max(longest[i], longest[j] + 1);
            }
        }
    }
    return Math.max(...longest);
};

// Idea: create an array filled with all 1s that are the same length as the input array. Calculate length of the longest subsequence at each index, how many values are smaller than the current one. Return the max.
// n: The number of values in the input array
// Time Complexity: O(n) * O(n - 1) =  O(n^2) as for each value we are doing n-1 work. Since we drop the constant it is n^2
// Space Complexity: O(n) as we are storing an array with the max lengths  