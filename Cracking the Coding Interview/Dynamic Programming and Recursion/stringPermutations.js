// Write an algorithm that computes all permutations of a string with only unique characters


const stringPermutations = function(string) {

    if(string === null) {
        return null;
    };

    let permutations = [];

    const calculate = function(string) {
        if(string === undefined) {
            permutations.push('');
            return permutations;
        }
        let first = string[0];
        let remainder = string.slice(1);
        let words = calculate(remainder);
        for(let i = 0; i < words.length; i++) {
            for(let j = 0; j < words[i].length; j++) {
                let s = insertCharAt(words[i], first, j);
                permutations.push(s);
            }
        }
    }

    calculate(string);
    return permutations;
}

const insertCharAt = function(word, char, position) {
    let beggining = word.slice(0, position);
    let end = word.slice(position);
    return beggining + char + end; 
}