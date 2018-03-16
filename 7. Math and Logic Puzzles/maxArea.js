  // Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

  // Note: You may not slant the container and n is at least 2.

var maxArea = function(heights) {
  let lPointer = 0;
  let rPointer = heights.length - 1;
  let max = 0;

  while (lPointer < rPointer) {
    let rightVal = heights[rPointer];
    let leftVal = heights[lPointer];
    let shortestVal = Math.min(rightVal, leftVal);

    let area = shortestVal * (rPointer - lPointer);
    max = Math.max(max, area);

    if (rightVal < leftVal) {
      rPointer--;
    } else {
      lPointer++;
    }
  }
  return max;
};
