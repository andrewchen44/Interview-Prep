// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

var uniquePaths = function(m, n) {
  let count = 0;

  const travel = (r, c) => {
      if (r > m || c > n) return;
      
      if (r === m && c === n) {
          count++;
      } else {
        travel(r + 1, c);
        travel(r, c + 1);  
      }
  }   
  
  travel(1,1)
  
  return count;
};

var uniquePaths = function(m, n) {
  let grid = [];

  // initialize grid
  for (let i = 0; i < m; i++) {
    grid.push([]);
    for (let j = 0; j < n; j++) {
      grid[i][j] = 1;
    }
  }

  // calculate paths per cell
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m - 1][n - 1];
};

// n m: the number of row and columns, respectively
// Time Complexity: O(mn) as we have to create the grid as well as iterate through most of the grid
// Space Complexity: O(mn) as we have to storethe grid