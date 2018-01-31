// Implement quicksort for funsies

const quickSort = function(array, left, right){
  if(left === undefined && right === undefined) {
    left = 0;
    right = array.length - 1;
  }
  if(array.length === 1) {
    return arr;
  }
  let pivot = Math.floor((right - left)/2);

  let partitionIndex = partition(array, pivot, left, right);
  quickSort(array, left, partitionIndex - 1);
  quickSort(array, partitionIndex + 1, right);


  return array
}

const partition = function(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let l = left;
  let r = right;
  while(l <= r) {
    while(array[l] < pivotValue){
      l++;
    }
    while(array[r] > pivotValue) {
      r--;
    }
    if(array[l] > pivotValue && array[r] < pivoteValue){
      swap(array, l, r);
      l++;
      i--;
    }
  }
  return l;
}

const swap = function(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

//take in array
//if the array length is 1, return the array
// choose the middle value as pivot
//call comparator on array with pivit
// call quicksort on both halves


// comparator function that s go throuogh and swaps values


// swap helper function
