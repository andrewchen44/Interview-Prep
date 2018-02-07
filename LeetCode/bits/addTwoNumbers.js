// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

var getSum = function(a, b) {
    while(b !== 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};

// Use & to get the carry (need to shift left by one) and ^ to add the two numbers together, keep repeating until there is no carry left