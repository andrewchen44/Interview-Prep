function sumOfTwo(a, b, v) {
    let storageB = {};
    for(let i = 0; i < b.length; i++){
        storageB[b[i]] = true;
    }
    for(let j = 0; j < a.length; j++) {
        if(storageB[v - a[j]]) {
            return true;
        }
    }
    return false;
}
