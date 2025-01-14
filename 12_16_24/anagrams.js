// n = length of string 1
// m = length of string 2
// Time: O(n+m)
// Space: O(n+m)
const anagrams = (s1, s2) => {
  // todo
  const m1 = new Map();
  const m2 = new Map();

  if (s1.length !== s2.length) return false;

  for (const c1 of s1) {
    if (m1.has(c1)) {
      m1.set(c1, m1.get(c1) + 1);
    } else {
      m1.set(c1, 1);
    }
  }

  for (const c2 of s2) {
    // console.log(c2);
    if (m2.has(c2)) {
      m2.set(c2, m2.get(c2) + 1);
    } else {
      m2.set(c2, 1);
    }
  }

  console.log(m1, m2);

  for (const [key, value] of m1) {
    const c2 = m2.get(key);
    console.log(key);
    if (value !== c2) return false;
  }

  return true;
};

module.exports = {
  anagrams,
};
