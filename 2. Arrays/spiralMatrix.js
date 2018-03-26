// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
// For example, Given n = 3, You should return the following matrix:
// [[ 1, 2, 3 ],[ 8, 9, 4 ],[ 7, 6, 5 ]]

var generateMatrix = function(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  let colStart = 0;
  let colEnd = n - 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let current = 1;

  while (current <= n * n) {
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = current++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = current++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = current++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = current++;
    }
    colStart++;
  }
  return matrix;
};

// n: The value of the input variable
// Time Complexity: O(n^2) as we add each value into the matrix
// Space Complexity: O(n^2) as well as we need to store n^2 values