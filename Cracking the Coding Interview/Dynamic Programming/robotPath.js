// Design an algorith to get to the botom right hand corner from the top left hand corner if you can only move down, right, and there are some spots that cannot be moved on.

const findPath = function (grid) {
    // returns null if the grid is invalid
    if(grid === null || grid.length === 0) {
        return null;
    };
    let path = [];
    let visitedCells = {};
    const calculate = function(grid, row, col) {
        // returns false if point is out of bounds
        if(row < 0 || col < 0) {
            return false;
        }
        const cell = [row, col];
        // returns false if the cell has already been visited
        if(visitedCells[cell]) {
            return false; 
        }
        let atOrigin = (row === 0) && (col === 0);
        // if we have reached the top left or if any of the recursive calls do, add all cells to the path
        if(atOrigin, calculate(grid, row - 1, col), calculate(grid, row, col - 1)) {
            path.push(cell);
            return true;
        }
        // adds any visited cells that did not get to the origin
        visitedCells[cell] = true;
        return false;
    }
    // call recursive functions and returns path if there is one to origin
    if(calculate(gride, grid.length - 1, grid[0].length - 1), path) {
        return path;
    }
    return null;
}