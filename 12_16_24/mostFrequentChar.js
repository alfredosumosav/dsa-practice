// n: length of string s
// Time: O(n)
// Space: O(n)
const mostFrequentChar = (s) => {
  // todo
  let maxReps = 0;
  const charCount = {};

  for (const char of s) {
    if (!(char in charCount)) {
      charCount[char] = 0;
    }

    charCount[char]++;

    if (charCount[char] > maxReps) {
      maxReps = charCount[char];
    }
  }

  for (const char of s) {
    if (charCount[char] === maxReps) return char;
  }
};

module.exports = {
  mostFrequentChar,
};
