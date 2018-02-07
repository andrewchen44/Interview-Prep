// use seive of Erastothenes to count number of primes less than n

var countPrimes = function(n) {
    let max = Math.sqrt(n);
    let store = [];
    let results = [];

    // initialize all values
    for(let i = 0; i < n; i++) {
        store.push(true);
    }
    // set any none primes to false
    for(let i = 2; i <= max; i++) {
        if(store[i]) {
            for(let j = i * i; j < n; j += i) {
                store[j] = false;   
            }
        }
    }
    // push all primes to results
    for(let i = 2; i < store.length; i++) {
        if(store[i]) {
            results.push(store[i]);
        }
    }
    return results.length;
};

// Has a time complexity of O(n) where n is the number as you initialize the array O(n), delete all the primes O(logn), and push all the results O(n)