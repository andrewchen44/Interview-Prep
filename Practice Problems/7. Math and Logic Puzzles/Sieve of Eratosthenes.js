 const sieveOfEratosthenes = function (max) {
    let nums = [];
    // Initiate numbers up to max
    for(let i = 0; i < max; i++) {
        nums.push(i);
    }
    nums[0] = false;
    nums[1] = false;
    let prime = 2;

    // Keep removing multiples of price until the prime number is greater than the square root of the max value
    while(prime <= Math.sqrt(max)) {
        removeMultiples(nums, prime);
        prime = getNextPrime(nums, prime);
    }

    let results = [];

    // Populate new array with numbers only
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) {
            results.push(nums[i])
        }
    }

    return results;
 };

 const removeMultiples = function(nums, prime) {
     for(let i = prime * prime; i < nums.length; i += prime) {
         nums[i] = false;
     }
 }

 const getNextPrime = function(nums, prime) {
    let next = prime + 1;
    while(next < nums.length && !nums[next]) {
        next++;
    }
    return next;
 }