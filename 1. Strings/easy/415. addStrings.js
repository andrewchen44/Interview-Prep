// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

var addStrings = function(num1, num2) {
  let i = num1.length-1;
  let j = num2.length-1;
  let carry = 0;
  let total = '';
  
  for(; i >= 0 || j >= 0 || carry > 0; j--, i--) {
      const dig1 = num1.charAt(i) - "0" || 0;
      const dig2 = num2.charAt(j) - "0" || 0;
      let sum = carry + dig1 + dig2;
      carry = 0

      if(sum > 9) {
          carry = 1;
          sum -=10
      }
      
      total = sum + total
  }
  
  return total
};

// Approach: Start from the ends of the numbers. Get the sum by adding them and the carry. If the sum is greater than 9, reset the carry to 1 and subtract the sum by 10. Add that total and keep doing so until there are no more digits or carry.
// Time Complexity: O(n) where n is longest number, as we are iterating through the the longest number + 1
// Space Complexity: O(1) as we are storing the new total in one string