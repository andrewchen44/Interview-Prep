// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function(n) {
    let results = [];
    let max = 2*n;
    
    const addParenthesis = function(currentString, open, close) {
        if(currentString.length === max) {
            results.push(currentString);
        }
        if(open < n) {
            addParenthesis(currentString + '(', open + 1, close);
        }
        if(close < open) {
            addParenthesis(currentString + ')', open, close + 1);
        }
    }
    addParenthesis('', 0, 0)
    return results;    
};

