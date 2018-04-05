// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

var setZeroes = function(matrix) {
    if(matrix === null) { return matrix; }
    let rows = []
    let cols = []
    let row = matrix.length;
    let col = matrix[0].length;
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] === 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }
    
    for(let i = 0; i < rows.length; i++) {
        let currentRow = rows[i];
        for(j = 0; j < col; j++) {
            matrix[currentRow][j] = 0;
        }

    }
    for(let i = 0; i < cols.length; i++) {
        let currentCol = cols[i];
        for(let j = 0; j < row; j++) {
            matrix[j][currentCol] = 0;
        }
    }
};

// Idea: Go through the matrix and keep track of all the rows and columns `that are to be zeroed out in an array. Go through the to be zeroed out arrays and zero out the rows and columns in the matrix
// m n: the number of rows and colums in the matrix
// Timee Complexity: O(mn) + O(2mn) as we need to go thruogh the whole array once to get the rows and columns and then potentiall the whole matrix twice if every column and row needs to be zeroed out
// Space Complexity: O(m + n) as store the rows and columns to be zeroed out in array