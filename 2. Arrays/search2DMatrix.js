// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let row = matrix.length - 1;

  while (matrix[row][0] > target && row !== 0) {
    row--;
  }
  for (let i = 0; i < matrix[row].length; i++) {
    if (matrix[row][i] === target) {
      return true;
    }
  }
  return false;
};

// find the row where the first value is smaller than the target, search that row for target

// m: number of rows in matrix
// n: number of columns in matrix
// Time Complexity: O(n) worst case as we may need to search all values if there are many rows and just one column, O(log n) average case as we only search one row
// Space Complexity: O(1) as we are not storing any additional information 
