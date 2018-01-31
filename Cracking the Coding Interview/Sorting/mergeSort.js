// Implement merge sort

const mergeSort = function(arr) {
  if(arr.length === 1) {
    return arr;
  }
  let mid = arr.length/2
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length - 1);

  return mergeHalves(mergeSort(left), mergeSort(right));
}

const mergeHalves = function(left, right) {
  let sorted = [];
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      sorted.push(left.shift());
    } else{
      sorted.push(right.shift());
    }
  }

  while(left.length){
    sorted.push(left.shift());
  }
  while(right.length) {
    sort.push(right.shift());
  }
  return sorted;
}
