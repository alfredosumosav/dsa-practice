// n: The length of the string
// Time: O(n)
// Space: O(n)
const compress = (s) => {
let compressed = [];
let currChar = s[0];
let i = 0;
let counter = 0;

while (i <= s.length) {
  if (s[i] !== currChar) {
    compressed.push(shorten(currChar, counter));
    currChar = s[i];
    counter = 0;
  }

  counter++;
  i++;
}

return compressed.join("");
};

const shorten = (char, count) => {
  if (count === 1) return char;

  return `${count}${char}`;
}

// console.log(compress("ccaaatsss")); // '2c3at3s'

module.exports = {
  compress,
};
