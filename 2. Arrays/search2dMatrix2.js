// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// For example,

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]

var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let row = 0;
  let column = matrix[0].length - 1;

  while (column >= 0 && row <= matrix.length - 1) {
    let value = matrix[row][column];
    if (value === target) {
      return true;
    } else if (value > target) {
      column--;
    } else {
      row++;
    }
  }
  return false;
}; 

// Start from the top right, if the value is greater than target. go left a column because all the ones below in the same column will be greater, if the value is less than the target, go up a row because all the values above are smaller

// m: number of rows in the matrix
// n: number of columns in the matrix
// Time Complexity: O(m+n) because worst case the value is at the bottom left and we have to go through every value and column once
// Space Complexity: O(1) as we are not storing any additional space.