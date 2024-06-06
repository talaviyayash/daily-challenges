function factorial(enterValue) {
  let convertToArray = [...Array(enterValue + 1).keys()];
  const findeValue = convertToArray.reduce((total, value) => {
    if (total == 0) total = 1;
    return total * value;
  });
  return findeValue;
}

console.log(factorial(5));

// how to make array counter wise.
