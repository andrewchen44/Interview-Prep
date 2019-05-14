// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

var trap = function(height) {
  let water = 0;
  let lMax = 0
  
  for(let i = 0; i < height.length; i++) {
      let currentHeight = height[i]
      let rMax = Math.max(...height.slice(i + 1))
      let min = Math.min(lMax, rMax);
      
      const diff = min - currentHeight || 0
      if(diff > 0) {
          water += diff
      }

      lMax = Math.max(currentHeight, lMax)
      
  }
  return water
};

// Approach: At each point, the amount of water trapped is the minimum of the left and right tallest blocks minus the current height. As you go through the blocks, update the left max if the current height is greater than the stored left max.
// Time Complexity: O(n) as we are iterating through all the sections
// Space Complexity: O(1) as we are not using any additional space to store the water count