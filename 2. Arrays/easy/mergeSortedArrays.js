// Merge two sorted arrays without using no additional space

var merge = function(nums1, m, nums2, n) {
    let currentPosition = m + n - 1
    let position1 = m - 1;
    let position2 = n - 1;
    
    while(position1 > -1 && position2 > -1) {
        let num1 = nums1[position1];
        let num2 = nums2[position2];
        if(num1 > num2){
            nums1[currentPosition] = num1;
            position1--;
        } else {
            nums1[currentPosition] = num2;
            position2--;
        }
        currentPosition--
    }
    while(position1 > -1) {
        nums1[currentPosition] = nums1[position1]
        position1--;
        currentPosition--;
    }
    while(position2 > -1) {
        nums1[currentPosition] = nums2[position2];
        position2--;
        currentPosition--
    }
};

// start from the end and add the largest value to end of num1. time complexity of O(n + m) and space complexity of O(1).