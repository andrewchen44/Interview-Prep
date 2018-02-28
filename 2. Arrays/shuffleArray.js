// Shuffle a set of numbers without duplicates.

var Solution = function(nums) {
  this.nums = nums;
};

Solution.prototype.reset = function() {
  return this.nums;
};

Solution.prototype.shuffle = function() {
  let shuffled = this.nums.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
};

// n: number of elements in array
// Time Complexity: O(n) as we only go through the array once
// Space Compleixty: O(n) as we are only modifying the array in place