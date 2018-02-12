// Find an efficient algorithm to find maximum sum of a subsequence in an array such that no consecutive elements are part of this subsequence.


const maxSum = function(array) {
    let n = array.length;
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return array[0];
    }
    let dp = [];
    dp[0] = array[0]; // first value to first of array
    dp[1] = Math.max(array[0], array[1]); // set second value to the greater of the first two

    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + array[i]); // each value will be the greater of robbing the house (adding the value of current and the 2nd previuos) or not robbing (only add the value of the previous)
    }
    return Math.max(...dp); // return the max of all house values
}

// Solution above has a time complexity of O(n), where n is the numbers of integers in the array, as we have to iterate through the whole array to calculate the values at each. The space complexity is O(n) as well as we are creating a new array with the same amount of data as n. The solution below has a space complexity of O(1) as we are simply storing the previous two numbers regardless of the size of n.

const maxSum = function(array) {
    let n = array.length;
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return array[0];
    }
    let two = array[0];
    let one = Math.max(array[0], array[1]);
    for(let i = 2; i < n; i++) {
        let current = Math.max(two + array[i], one);
        two = one;
        one = current;
    }
    return Math.max(one, two);
}