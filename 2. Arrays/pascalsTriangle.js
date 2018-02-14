// Given numRows, generate the first numRows of Pascal's triangle.

var generate = function(numRows) {
    if(numRows === 0 || numRows === null) {
        return [];
    }
    
    let triangle = [[1]];
    for(let i = 1; i < numRows; i++) {
        triangle.push([])   
    }
    
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < i + 1; j++) {
            let upLeft = triangle[i-1][j-1] | 0
            let upRight = triangle[i-1][j] | 0;
            triangle[i][j] = upLeft + upRight;
        }
    }
    

    return triangle;
};