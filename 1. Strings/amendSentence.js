// Add spaces and remove caps from a sentence

function amendTheSentence(s) {
    let sentence = s[0].toLowerCase();
    for(let i = 1; i < s.length; i++) {
        if(s[i] >= "a" && s[i] <= "z") {
            sentence += s[i];
        } else {
            sentence += ' ';
            sentence += s[i].toLowerCase();
        }
    }
    return sentence;
}

// n: Number of characters in the sentence
// Time Complexity: O(n) as we only iterate through the array once
// Space Complexity: O(n log n) as we using additional space to store the new sentence.
