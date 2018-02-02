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

