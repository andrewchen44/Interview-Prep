// Find the nth Fibonacci number

const fibonacci = function(n){
    let memo = [];

    memo[0] = 0;
    memo[1] = 1;

    if(n === 1 || n === 0) {
        return memo[n];
    } else {
        for(let i = 2; i < n; i++) {
            memo[i] = memo[i - 2] + memo[i - 1];
        }
    }

    return memo[n - 1]
}