function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  // Initialize a 2D DP array with zeros
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  // Fill the DP array
  for (let i = m - 1; i >= 0; i--) {
    dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i);
  }

  for (let j = n - 1; j >= 0; j--) {
    dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(
          dp[i + 1][j] + s1.charCodeAt(i),
          dp[i][j + 1] + s2.charCodeAt(j)
        );
      }
    }
  }

  return dp[0][0];
}