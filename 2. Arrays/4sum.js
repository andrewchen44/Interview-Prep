// Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

var fourSumCount = function(A, B, C, D) {
  let abSums = {};
  let totalWays = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j];
      if (abSums[sum] !== undefined) {
        abSums[sum]++;
      } else {
        abSums[sum] = 1;
      }
    }
  }
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = -(C[i] + D[j]);
      if (abSums[sum]) {
        totalWays += abSums[sum];
      }
    }
  }
  return totalWays;
};

// find all possible sums of A and B and put them in a hash map. Increase the count if it occurs more than once. Then find all possible values of C and B. If those are found in the hash map, add the count to the total wasy to be returned.

// a, b, c, d: total values in a b c and d, respectively
// Time complexity: O(ab + cd) as we find all possible sums of the two pairs
// Space complexity: O(ab) as we store possible sums between a and b