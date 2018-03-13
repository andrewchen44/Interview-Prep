// Given a collection of distinct numbers, return all possible permutations.
// For example,
// [1,2,3] have the following permutations:
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function(nums) {
    let permutations = [];
    
    if(nums.length < 2) { // if there is only 1 value left in the array, return that in an array as there are no other permutations
        permutations.push(nums);
        return permutations;
    }
    
    for(let i = 0; i < nums.length; i++) { // go through all the values in input array
        let char = [nums[i]]; // take out the target value
        
        let leftRemains = nums.slice(0, i); // get the other values to the left of target value
        let rightRemains = nums.slice(i+1, nums.length) // get all the other values to the right of the target value
        let remainingNums = leftRemains.concat(rightRemains); // combine all other values in one array
        
        let subPermutations = permute(remainingNums); // get the permutations of all the other values
        
        for(let subPermutation of subPermutations){ // go through each of the permutations returns
            permutations.push(char.concat(subPermutation)); // add the target value to all subPermutations and push to permutations
        }
    }
    return permutations;
};

// n: number of integers in nums
// Time Complexity: As there are n! permutations for any set, the run time is O(n!)
// Space Complexity: O(n!) as we are storing every perumtation of the set