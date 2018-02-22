// Implement quicksort for funsies

const quickSort = function(array, left, right){
  //sets the initial left right value
  if(left === undefined && right === undefined) {
    left = 0;
    right = array.length - 1;
  }
  // only recurses if left value is less than right
  if(left < right) {
    let partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex, right);
  }
  return array
}

const partition = function(array, left, right) {
  let pivotValue = array[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;
  // goes through array and swaps values if larger than pivot 
  while(l <= r) {
    while(array[l] < pivotValue){
      l++;
    }
    while(array[r] > pivotValue) {
      r--;
    }
    if(l <= r){
      swap(array, l, r);
      l++;
      r--;
    }
  }
  return l;
}

const swap = function(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}
