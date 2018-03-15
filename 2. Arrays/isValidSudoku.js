// Determine if a Sudoku is valid

var isValidSudoku = function(board) {
    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            let currentVal = board[r][c];
            if(currentVal !== '.') {
                if(!checkVal(r, c, currentVal, board)){ return false; } // if the values occur more than once in their row, column, or grid, return false;
            }
        }
    }
    return true;
};

const checkVal = function(r, c, value, board) {
    let occurances = 0;
    for(let i = 0; i < 9; i++) {
        if(board[r][i] === value) { occurances++; } // checks to see how many times it occured in the row
        if(board[i][c] === value) { occurances++; } // checks to see how many times it occured in the column
    }
    while(r%3 !== 0) { r--; } 
    while(c%3 !== 0) { c--; } // decrease row and column values until you are at the beggining of the section
    
    for(let i = r; i < r + 3; i++) {
        for(let j = c; j < c + 3; j++) { // check the section to make sure it only occures once;
            if(board[i][j] === value) { occurances++; }
        }
    }
    if(occurances > 3) { return false; } 
    return true;
}