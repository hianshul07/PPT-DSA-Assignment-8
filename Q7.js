function decodeString(s) {
    const numStack = [];
    const strStack = [];
    let currentNum = 0;
    let currentStr = '';
  
    for (const char of s) {
      if (char >= '0' && char <= '9') {
        currentNum = currentNum * 10 + parseInt(char);
      } else if (char === '[') {
        numStack.push(currentNum);
        strStack.push(currentStr);
        currentNum = 0;
        currentStr = '';
      } else if (char === ']') {
        const repeatTimes = numStack.pop();
        const prevStr = strStack.pop();
        currentStr = prevStr + currentStr.repeat(repeatTimes);
      } else {
        currentStr += char;
      }
    }
  
    return currentStr;
  }