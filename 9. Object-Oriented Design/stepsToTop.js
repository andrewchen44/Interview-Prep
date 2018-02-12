// If you can take 1, 2, or 3 steps at a time, how many possible ways can you get up stairs n tall

const countWays = function(n){
    let memo = [];

    const count = function(n, memo) {   
        if(n < 0) {
            return 0;
        } else if(n === 0) {
            return 1;
        } else if(memo[n] > -1) {
            return memo[n];
        } else{
            memo[n] = count(n - 1, memo) + count(n - 2, memo) + count(n - 3, memo);
            return memo[n];
        }
    }

    count(n, memo);
    return memo[n];
}