// Write a function to determine the number of bits you would need to flip to convert integer num1 to integer num2

const converter = function(num1, num2) {
    let count = 0;
    for(let difference = num1 ^ num2; difference != 0; difference = difference & (difference - 1)) {
        count ++;
    }
    return count;
}

// Find the differences
// Keep subtracting one until it is 0