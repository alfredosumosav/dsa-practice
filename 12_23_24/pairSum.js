// n: numbers array length
// time: O(n^2)
// space: O(1)
// const pairSum = (numbers, targetSum) => {
//   for (let i = 0; i < numbers.length; i++) {
//     const n = numbers[i];
//     for (let j = i + 1; j < numbers.length; j++) {
//       const m = numbers[j];
//       if (n + m === targetSum) return [i, j]
//     }
//   }
// };

// n: length of the numbers array
// time: O(n)
// space: O(n)
const pairSum = (numbers, targetSum) => {
  const previous = {};
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const complement = targetSum - current;

    if (complement in previous) return [previous[complement], i];

    previous[current] = i;
  }
};

/*

[3, 2, 5, 4, 1], 8
         |  |

3 + 2 = 5
3 + 5 = 8
3 + 4 = 7
3 + 1 = 4
2 + 5 = 7
2 + 4 = 6
2 + 1 = 3
5 + 4 = 9
5 + 1 = 6
4 + 1 = 5

*/

module.exports = {
  pairSum,
};
