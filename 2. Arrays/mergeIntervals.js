// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

var merge = function(intervals) {
    let sortedInts = intervals.sort(function(a, b) { return a.start - b.start; })
    let merged = [sortedInts[0]];
    for(let i = 1; i < sortedInts.length; i++) {
        let currentInt = sortedInts[i];
        let previousInt = sortedInts[i-1];
        if(currentInt.start <= previousInt.end && currentInt.end > previousInt.end) {
            previousInt.end = currentInt.end;
            sortedInts.splice(i, 1);
            i--;
        } else if(currentInt.start >= previousInt.start && currentInt.end <= previousInt.end) {
            sortedInts.splice(i, 1);
            i--;
        }
    }
    return sortedInts;
};

// Idea: Sort all the intervals by the start value of each interval. Once it is sorted, go through all the intervals and compare it to the previous one. If it can fit in the previous interval, extend the previous interval and remove the current one. 
// n: the number of intervals inputed
// Time Compleixty: O(nlogn) + O(n) as we first sort the array and then iterate through the whole thing.
// Space Complexity: O(n) as we may need to store all variables in an additional array 