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