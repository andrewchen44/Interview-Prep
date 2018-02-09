// Create a function that determines how many waysy ou can climb n stairs if you can only take 1 or two steps at a time

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
