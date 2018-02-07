// write a function that swaps odd and even bits in an integer with as few instructions as possible.

const swapOddEvenBits = function (num) {
    return ( (num & 0xaaaaaaaa) >>> 1) | ((num & 0x55555555) << 1)
}

// 0xA: pattern that creates 10101010 to get odd bits
// 0x5: pattern that creates 01010101 to get even bits
// 0x5: pattern that creates 01010101 to get even bits