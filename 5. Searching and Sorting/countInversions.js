const countInversions = function(array) {
  if(array === undefined || array.length === 0 || array.length === 1) {
    return 0;
  }

  let totalInversions = 0;

  sortArray(array);
  return totalInversions;

  const sortArray = function(arr) {
    if(arr.length === 1) {
      return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let right = arr.slice(middle);
    let left = arr.slice(0, middle);
    return mergeHalves(sortArray(left), sortArray(right))

  }

  const mergeHalves = function(left, right) {
    let merged = [];
    while (left.length && right.length) {
      if (right[0] < left[0]) {
        totalInversions += left.length;
        merged.push(right.shift());
      } else {
        merged.push(left.shit());
      }
    }
    while (left.length) {
      merged.push(left.shit());
    }
    while (right.length) {
      merged.push(right.shift());
    }
  };

}

// essentially use merge sort except when you are merging, the number of inversions is increased by the length of the left array everytime you add an element from the right array as you merge them.

//n: n: number of elements in input array
// Time Complexity: O(nlogn) as each merge takes n time and there will only be log n recursive calls
// Space Complexity: O(n) as we need to store each variable at some point
