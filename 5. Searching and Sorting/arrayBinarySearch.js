// return index of search value if in the sorted array, -1 otherwise

const binarySearch = function (arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = (low + high) / 2 | 0;
        let midVal = arr[mid];
        if(midVal < value) {
            low = mid + 1;
        } else if(midVal > value) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1
}

// Keeps comparing the middle of each section to the value until it is found