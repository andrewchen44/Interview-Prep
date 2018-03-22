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
    if (
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
    if (newString[m - 1] !== word[m - 1]) {
      return false;
    }
    if (newString === word) {
      return true;
    }
    explored[[row, col]] = true;

    if (
      explore(row + 1, col, newString) ||
      explore(row, col + 1, newString) ||
      explore(row - 1, col, newString) ||
      explore(row, col - 1, newString)
    ) {
      return true;
    }
    explored[[row, col]] = false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let currentChar = board[i][j];
      if (currentChar === word[0] && explore(i, j, "")) {
        return true;
      }
    }
  }
  return false;
};  
