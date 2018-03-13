// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

var rotate = function(matrix) {
  let n = matrix.length;
  let mid = Math.floor(n / 2);
  for (let r = 0; r < n; r++) { // transpose all the values
    for (let c = r; c < n; c++) {
      let temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }
  for (let r = 0; r < n; r++) { // flip them horizontally
    for (let c = 0; c < mid; c++) {
      let temp = matrix[r][c];
      matrix[r][c] = matrix[r][n - c - 1];
      matrix[r][n - c - 1] = temp;
    }
  }
};

// n: the number of column in the input matrix
// Time Complexity: O(n^2) as we are going through the entire matrix twice
// Space Complexity: O(1) as we are not using any additional space
