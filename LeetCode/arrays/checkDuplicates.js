// Check an array to see if there are duplicates

var containsDuplicate = function(nums) {
    let storage = {};
    for(let i = 0; i < nums.length; i++) {
        let integer = nums[i];
        if(!storage[integer]){
            storage[integer] = true;
        } else {
            return true;
        }
    }
    return false;
    
};

// Add values to a object and if it is found twice return true. Worst case time complexity of O(n) where n is numbers of integers in nums and has a space complexity of O(n) as well