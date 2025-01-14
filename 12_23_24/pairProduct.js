// n = length of array
// Time: O(n)
// Space: O(n)
const pairProduct = (numbers, targetProduct) => {
  const previous = {};

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const complement = targetProduct / current;

    if (complement in previous) return [i, previous[complement]];

    previous[current] = i;
  }
};

module.exports = {
  pairProduct,
};
