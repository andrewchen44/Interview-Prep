// Find the nth Fibonacci Number

const fibonacci = function(n) {

    let memo = [];

    const calculate = function(n) {
        if(n === 0 || n === 1) {
            return n;
        } 
        if(memo[n] === undefined) {
            memo[n] = calculate(n - 1) + calculate(n - 2);
        }

        return memo[n]
    }
    return calculate(n);
}