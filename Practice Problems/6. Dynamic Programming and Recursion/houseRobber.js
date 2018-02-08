// given an array of houses nums, what is the max value you can get from robbing nonadjacent houses

function houseRobber(nums) {
    // if the house length is 0 return 0
    if(nums.length === 0) {
        return 0;
    // if the house length is 1 return 1
    } else if(nums.length === 1) {
        return nums[0]
    }
    let memo = [];
    memo[0] = nums[0];
    // the second value will be the greater of the first and second value. This is because the third house will only be skipped if the second house is worth more than the first house. But if it would be better two skip two houses, the only way to keep track of the 3rd to last house is by setting it to the second value.
    memo[1] = Math.max(nums[0], nums[1])
    
    //go through the houses
    for(let i = 2; i < nums.length; i++) {
        // at each house, we either skip it (value is the previous house value) or rob it (value is the current house and 2 houses before);
        memo[i] = Math.max(memo[i - 1], memo[i - 2] + nums[i])
    }
    return Math.max(...memo)
}

//This has a O(n) time complexity, where n is the number of houses and has a space complexity of O(n) as well. Could make it constant space by only keeping track of the previous two.