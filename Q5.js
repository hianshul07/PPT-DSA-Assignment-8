function compress(chars) {
  let writeIdx = 0;
  let count = 0;

  for (let readIdx = 0; readIdx < chars.length; readIdx++) {
    count++;

    if (readIdx + 1 === chars.length || chars[readIdx] !== chars[readIdx + 1]) {
      chars[writeIdx] = chars[readIdx];
      writeIdx++;

      if (count > 1) {
        const countStr = count.toString();
        for (const char of countStr) {
          chars[writeIdx] = char;
          writeIdx++;
        }
      }

      count = 0;
    }
  }

  return writeIdx;
}

// test case:
const chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));  // Output: 6
console.log(chars.slice(0, 6));  // Output: ["a", "2", "b", "2", "c", "3"]
