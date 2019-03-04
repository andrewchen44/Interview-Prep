// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0; // return 0 if there is no grid
  }
  let islandNum = 0;
  let rows = grid.length;
  let columns = grid[0].length; //initialize variables
  const explore = function(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    explore(r + 1, c);
    explore(r - 1, c);
    explore(r, c + 1);
    explore(r, c - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) { // go through grid and call recursive function on any cell that is a "1"
      let currentCell = grid[i][j];
      if (currentCell === "1") {
        islandNum++;
        explore(i, j);
      }
    }
  }
  return islandNum;
};