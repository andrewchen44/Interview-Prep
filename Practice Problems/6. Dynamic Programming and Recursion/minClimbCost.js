// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.


var minCostClimbingStairs = function(cost) {
    let dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
    }
    return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
};

// calculate the minimum cost that can be taken at each step. Time complexity of O(n), where n is the number of steps, as you need to compute the cost of each steps. Has a time complexity of O(n) as well as you need to create an array with the same space as n. Could do O(1) if you only keep track of the previous two values.