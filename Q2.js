function checkValidString(s) {
  let low = 0, high = 0;
  for (let char of s) {
      if (char === '(') {
          low++;
          high++;
      } else if (char === ')') {
          low--;
          high--;
      } else {
          low--;
          high++;
      }
      low = Math.max(low, 0);
      if (high < 0) return false;
  }
  return low === 0;
}