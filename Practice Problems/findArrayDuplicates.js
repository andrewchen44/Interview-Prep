function containsDuplicates(a) {
    
    let storage = {};
    
    for(let i = 0; i < a.length; i++) {
        if(storage[a[i]]){
            return true;
        } else {
            storage[a[i]] = true;
        }
    }
    return false;
}