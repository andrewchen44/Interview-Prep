// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x); // split the string version, reverse it, join it
    let max32Bit = Math.pow(2, 31) - 1; //max 32 bit signed integer possible
    if(reversed > max32Bit || reversed < max32Bit * -1) { // if the reversed integer is out of bounds return 0
        return 0; 
    } else {
        return reversed; // return the reversed version if in bounds
    }
};

