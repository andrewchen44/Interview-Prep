// Given an array, find the contiguous subarray with the largest sum.

const largestSum = function(array) {
    let n = array.length;
    if(n === 0) {
        return 0; // return 0 if nothing in array
    }
    let currentSum = array[0];
    let maxSum = array[0]; //initialize current and max sum to the first value
    
    for(i = 1; i < n; i++) { // got through the other values
        if(currentSum < maxSum) { //if the current sum is less than the max, that means we stop looking at the sequence
            currentSum = array[i]; // by setting the current sum to this value
        } else {
            currentSum += array[i]; //if it is equal are greater, we add the value to the sum
        }

        if(currentSum > maxSum) { // check to see if the current sum is greater than the max
            maxSum = currentSum; // set the max to the current if it is
        }
    }
    return maxSum; // return the max sum
}

// This has a time complexity of O(n), where n is the number of elements in the array, as we have to iterage through the whole array once. This has a constant space complexity of O(1) as we do not store any additional information or make any recursive calls.