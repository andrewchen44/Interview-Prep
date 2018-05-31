// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(s) {
    let values = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    let value = 0;
    for(let i = 0; i < s.length; i++) {
        let currentValue = s[i];
        let nextValue = s[i + 1];
        if(values[nextValue] > values[currentValue]) {
            value += values[nextValue] - values[currentValue];
            i++;
        } else {
            value += values[currentValue];
        }
    }
    return value;
};

// Idea is to go through string and add values to returned value. If the next roman value is greater than the current, add the difference. 

// n: Number of digits in s
// Time Complexity: O(n) as we only iterage through the string array once.
// Space Complexity: O(1) as we do not store any additional values