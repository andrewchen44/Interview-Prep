// Given an array of strings, group anagrams together.

var groupAnagrams = function(strs) {
  let seenAnagrams = {};
  let results = [];

  for (let string of strs) {
    let sorted = string
      .split("")
      .sort()
      .join("");
    if (seenAnagrams[sorted] === undefined) {
      seenAnagrams[sorted] = [string];
    } else {
      seenAnagrams[sorted].push(string);
    }
  }

  for (let anagram in seenAnagrams) {
    results.push(seenAnagrams[anagram]);
  }

  return results;
};
