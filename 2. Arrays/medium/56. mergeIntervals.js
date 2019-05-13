// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

var merge = function(intervals) {
    const sorted = intervals.sort((a, b) => { return a[0] - b[0] })
    
    for(let i = 0; i < sorted.length; i++) {
        const current = sorted[i];
        const next = sorted[i+1];
        
        if(next && current[1] >= next[0]) {
            sorted[i] = [current[0], Math.max(current[1], next[1])];
            sorted.splice(i + 1, 1);
            i--;
        }
    }

    return sorted
};

// Idea: Sort all the intervals by the start value of each interval. Once it is sorted, go through all the intervals and compare it to the previous one. If it can fit in the previous interval, extend the previous interval and remove the current one. 
// n: the number of intervals inputed
// Time Compleixty: O(nlogn) + O(n) as we first sort the array and then iterate through the whole thing.
// Space Complexity: O(n) as we may need to store all variables in an additional array, could be O(1) if we sort the input