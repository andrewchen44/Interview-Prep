// Write a function to determine the number of bits you would need to flip to convert integer A to integer B

const converter = function(a, b) {
    let count = 0;
    for(let c = a ^ b; c != 0; c = c >>> 1) {
        count += c & 1;
    }
    return count;
}