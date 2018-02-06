// Reimplement Math.sqrt()

var mySqrt = function(x) {
    let sqrt = x;
    while(sqrt * sqrt > x) {
        sqrt = ((sqrt + x/sqrt)/2) | 0;
    }
    return sqrt
};