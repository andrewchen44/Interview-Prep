// Design an algorith to get to the botom right hand corner from the top left hand corner if you can only move down, right, and there are some spots that cannot be moved on.

const findPath = function (grid) {
    if(grid === null || grid.length === 0) {
        return null;
    };

    let path = [];

    const calculate = function(grid, row, col) {
        if(row < 0 || col < 0) {
            return false;
        }

        let atOrigin = (row === 0) && (col === 0);

        if(atOrigin, calculate(grid, row - 1, col), calculate(grid, row, col - 1)) {
            path.push([row, col]);
            return true;
        }
        return false;
    }

    if(calculate(gride, grid.length - 1, grid[0].length - 1), path) {
        return path;
    }

    return null;

}