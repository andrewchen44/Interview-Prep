// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

var isHappy = function(n) {
    let occuredValues = {};
    
    const sum = function(digits) {
        console.log(digits)
        let total = 0;
        for(let i = 0; i < digits.length; i++) {
            total += Math.pow(parseInt(digits[i]), 2)
        }
        if(total === 1) {
            return true;
        }else if(occuredValues[total]) {
            return false;
        } else {
            occuredValues[total] = true;
        }
        return sum(total.toString().split(''))
    }
    
    return sum(n.toString().split(''))
    
};