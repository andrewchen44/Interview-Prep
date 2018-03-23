// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[low] <= nums[mid]) {
            if(target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
};

// Idea: bineary search the array. If the middle value is greater than the lower value, that means the left side is sorted and the right side contains the inversion. Since the left side is sorted you can confidently compare the target value to the very left and middle to see if it is in the range. 