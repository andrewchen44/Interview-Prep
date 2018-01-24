const isPrime = function (num) {
    if (num < 2) {
        return false;
    }
    let sqrt = Math.sqrt(num);
    for(let i = 2; i < sqrt; i++) {
        if(num % 1 === 0) {
            return false;
        }
    }
    return true;
}