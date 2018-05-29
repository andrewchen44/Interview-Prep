// Given an array of strings containing brackets, return an array that contains either "YES" or "No" depending on whether or not the brackets for the string at the given index were balanced.


const 

// go through array

// determine whether or not balanced

// push it into the output 

const balanced = (string) => {
  let brackets = string.split('');
  let left = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  let rught = {
    '}': '{',
    ']': '[',
    ''
  }
  let count = {};
  for(let i = 0; i < brackets.length; i++) {
    let current = brackets[i];
    if(left[current]){
      if(count[current]){
        count[current]++;
      } else {
        count[current] = 1;
      }
    }

  }
}

// helper function to determin balance
  // split up string into array
  // create counter object
  // go through string
    // and for every left bracket, increase by one
    // for every right bracket
      // check to make sure there are enough left bracket
        // if there are not enough, push No into results
      // decrease by one
      // 