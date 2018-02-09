// Create a function that determines how many ways you can climb n stairs if you can only take 1 or two steps at a time

function climbingStairs(n) {
    let memo = [];
    
    const climb = function(n) {
        if(n < 0) {
            return 0;
        } else if(n === 0){
            return 1;
        } else if(memo[n]){
            return memo[n];
        } else {
            memo[n] = climb(n - 1) + climb(n - 2);
            return memo[n]
        }
    }
    return climb(n);
}

// n: number of stairs
// Time Complexity: O(n) as we need to calculate how any ways to climb all stairs before it
// Space Complexity: O(n) as we need to store all calculated values of stairs before it

function climbingStairs(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-2] + dp[i-1];
    }
    return dp(n);
}