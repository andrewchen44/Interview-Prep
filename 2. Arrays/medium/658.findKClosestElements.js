// Given a sorted array, two integers k and x, find the k closest elements to x in the array.The result should also be sorted in ascending order.If there is a tie, the smaller elements are always preferred.

var findClosestElements = function (arr, k, x) {
  const index = binarySearch(arr, x);
  let left = index;
  let right = index;
  if (index === -1) {
    return [];
  }
  while (right - left + 1 < k) {
    if (left === 0) {
      right++;
    } else if (right === arr.length - 1) {
      left--;
    } else if (Math.abs(x - arr[left - 1]) <= Math.abs(x - arr[right + 1])) {
      left--;
    } else {
      right++;
    }
  }
  return arr.slice(left, right + 1);
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }
  return left;
}

// Approach: Binary search until you find the number or the number closest to it, branch out left and right until you have enough, return the array at that slice
// Time complexity: O(log n + n) as it takes log n time to binary search the value, but it could take up to n to branch out fully
// Space complexity: O(1) as we are not using any additional time or space
