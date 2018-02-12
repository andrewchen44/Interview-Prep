// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function(nums, k) {
  let results = [];
  let counts = {};
  let buckets = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) { // Go through an initialize storage hash table with counts of each integer
    let value = nums[i];
    if (counts[value]) {
      counts[value]++;
    } else {
      counts[value] = 1;
    }
  }

  const countsKeys = Object.keys(counts);

  for (let i = 0; i < countsKeys.length; i++) { // go through all values in hash table and store them in array at the index of how many times they occured (bucket sorting)
    let count = counts[countsKeys[i]];
    if (buckets[count]) {
      buckets[count].push(parseInt(countsKeys[i]));
    } else {
      buckets[count] = [parseInt(countsKeys[i])];
    }
  }

  let resultsCount = 0;
  for (let i = buckets.length; resultsCount !== k; i--) { // start from the end of the buckets array and push the values in the the results array until you have as many as k
    if (buckets[i]) {
      for (let j = 0; j < buckets[i].length; j++) {
        let value = buckets[i][j];
        results.push(value);
        resultsCount++;
      }
    }
  }
  return results;
};
