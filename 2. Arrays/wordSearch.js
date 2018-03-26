// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

var exist = function(board, word) {
  let rows = board.length;
  if (rows === 0) {
    return false;
  }
  let cols = board[0].length;
  let explored = {};

  const explore = function(row, col, currentString) {
    if ( // if the cell is out of bounds or has already been explored, return false;
      row < 0 ||
      row > rows - 1 ||
      col < 0 ||
      col > cols - 1 ||
      explored[[row, col]] === true
    ) {
      return false;
    }
    let newString = currentString + board[row][col];
    let m = newString.length;
    if (newString[m - 1] !== word[m - 1]) { // if the character to be checked doesn't match the character in word at position return false;
      return false;
    }
    if (newString === word) { // if the word matches return true;
      return true;
    }
    explored[[row, col]] = true; // mark the explored cell as true

    if (
      explore(row + 1, col, newString) || // explore all other possible cells around it
      explore(row, col + 1, newString) ||
      explore(row - 1, col, newString) ||
      explore(row, col - 1, newString)
    ) {
      return true;
    }
    explored[[row, col]] = false; // reset this cells exploration if path does not find solution
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) { // go through board and 
      let currentChar = board[i][j];
      if (currentChar === word[0] && explore(i, j, "")) {
        return true;
      }
    }
  }
  return false;
};  
