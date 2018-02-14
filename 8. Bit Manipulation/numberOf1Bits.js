// Write a function that takes an unsigned (positive) integer and returns the number of 1 bits its binary representation contains. This value is also known as the integer's Hamming weight.

function numberOf1Bits(n) {
    'use strict'
    let res = 0;
    while (n != 0) {
      n = n & (n - 1)
      res++;
    }
    return res;
  }
  