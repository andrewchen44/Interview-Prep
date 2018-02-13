// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

var kthSmallest = function(matrix, k) {
  let allValues = [];

  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      allValues.push(matrix[i][j]);
    }
  }
  allValues.sort(function(a, b) {
    return a - b;
  });
  console.log(allValues);
  return allValues[k - 1];
};

// go through the matrix and add all the values to an array, sort the array in ascending order, and return the kth value

// n: number of items in the matrix
// Time Complexity: O(n + n log n) as we need to iterage through the matrix values and put them into an array O(n) and then sort the values O(nlogn)
// Space Complexity: O(n) as we need to create a new array to store every value of the matrix