function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Initialize a 2D DP array with zeros
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  // Fill the DP array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The minimum number of steps is the total length minus the length of the longest common subsequence
  return m + n - 2 * dp[m][n];
}