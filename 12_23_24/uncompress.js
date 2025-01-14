// n = number of groups
// m = max num found
// Time: O(n*M)
// Space: O(n*m)
const uncompress = (s) => {
  const numbers = new Set("0123456789".split(""));

  const result = [];
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (numbers.has(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));

      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }

      j++;
      i = j;
    }
  }

  return result.join("");
};

console.log(uncompress("2a")); // -> 'aa'
console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'

module.exports = {
  uncompress,
};
