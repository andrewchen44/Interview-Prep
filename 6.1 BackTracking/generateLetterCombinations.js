// Given a digit string, return all possible letter combinations that the number could represent.

var letterCombinations = function(digits) {
    if(digits.length === 0) { return [];  }
    
    const mapping  = ['0', '1', 'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'] // put all key mappings in the array where the index matches the phone digit

    let results = [];
    
    const generate = function(currentSet, setIndex) { // recursive function that generates possible combinations
        if(currentSet.length === digits.length) { // if the length of the current combination in the proper length, add it to the results
            results.push(currentSet);
            return;
        }
        let currentDigit = mapping[digits[setIndex]]; // get the current set

        for(let i = 0; i < currentDigit.length; i++) { // call recursive functions on all possible values of the current set
            generate(currentSet + currentDigit[i], setIndex + 1);
        }
    }
    generate('', 0);
    return results;
};

// n: number of digits in digits
// Time Complexity: O(n!) as we are generating all possible combinations 