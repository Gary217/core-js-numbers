function getSumOfDigits(num) {
  const numStr = num.toString();
  let count = 0;
  for (let i = 0; i < numStr.length; i += 1) {
    count = count + Number(numStr[i]);
  }
  console.log(count);
}

getSumOfDigits(123);