// Given a set of distinct integers, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.
// For example,
// If nums = [1,2,3], a solution is:
// [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]
var subsets = function(nums) {
    let seen = {};
    let sets = [[]];
    if(nums.length < 1) { return sets;} // return empty sets if input is empty'

    const generate = function(currentInts, index) { // recursive function that generates all possible sets
        let set = currentInts.join('');
        if(!seen[set]){ //if we have never seen the set before, add it to the sets
            sets.push(currentInts);
            seen[set] = currentInts;
        }
        if(index < nums.length - 1) { // if we are not at the end of the input array,
            let newCurrent = currentInts.slice();
            newCurrent.push(nums[index + 1])
            generate(newCurrent, index + 1); // call generate with the next value added
            generate(currentInts, index + 1); // call generate with the next value not added
        }
    }

    nums = nums.sort(function(a,b){return a-b}) // sort the array because leetcode wanted the sets in sorted order
    for(let i = 0; i < nums.length; i++) {
        generate([nums[i]], i); // call generate with each value in the input array as the starting point
    }
    return sets;
};

// n: number of integers in input array
// Time Complexity: O(n^3) as for each value in the input array, we are making 2 recursive calls for every other value in the input array
// Spce Complexity: O(n^2) as there will be that many recursive calls going on for each value in input array
