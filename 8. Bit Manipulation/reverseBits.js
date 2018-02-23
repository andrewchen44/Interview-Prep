// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

var reverseBits = function(n) {
    let input = n;
    let output = 0;

    for(let i = 0; i < 32; i++) {
        output = ((output << 1) | (input & 1)) >>> 0;
        input >>>= 1;
    }

    return output;
};

// take the last digit of the input, shift the output over to the right by one, put it on the output with OR, and shift the input over right by 1. We need to use the triple shift operater on the output in order to make it an unsigned or else in javascript they will assume it is signed.

// Time Complexity: O(1) as it will only take 32 regardless of the integers;
// Space Complexity: O(1) as we don't store more the larger n is