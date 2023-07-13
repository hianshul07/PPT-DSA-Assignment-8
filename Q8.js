function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    // Check if there are at least two repeating characters in s
    const charCount = new Map();
    for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
      if (charCount.get(char) >= 2) {
        return true;
      }
    }
    return false;
  }

  const mismatchedIndices = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatchedIndices.push(i);
    }
  }

  if (mismatchedIndices.length !== 2) {
    return false;
  }

  const [index1, index2] = mismatchedIndices;
  return s[index1] === goal[index2] && s[index2] === goal[index1];
}