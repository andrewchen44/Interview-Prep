// Given a target sum and the following coins [1, 5, 10, 25, 50] how many possible ways can you reach that sum with those values

//recursive

const possibleWays = function(target, array) {
    let memo = [];
    const count = function(currentValue) {
        if(currentValue < 0) {
            return 0;
        } else if(currentValue === 0) {
            return 1;
        } else if(memo[currentValue]) {
            return currentValue;
        } else {
            memo[currentValue] = count(currentValue - 50) + count(currentValue - 25) + count(currentValue - 10) + count(currentValue - 5) + count(currentValue - 1);
            return memo[currentValue];
        }

    }
    count(target);
    return memo[target];
}
// n = target value
// Time complexity O(n), calculate all values below n
// Space complexity O(n), need to store each sum below n

// Iteratively

const possibleWays = function(target, array) {
    let memo = [];
    const count = function(currentValue) {
        if(currentValue < 0) {
            return 0;
        } else if(currentValue === 0) {
            return 1;
        } else if(memo[currentValue]) {
            return currentValue;
        } else {
            memo[currentValue] = count(currentValue - 50) + count(currentValue - 25) + count(currentValue - 10) + count(currentValue - 5) + count(currentValue - 1);
            return memo[currentValue];
        }

    }