const array1 = [32, -56, 6, -4, 29, 0, 32, -23, 12, -76, 76];

function sumOfPositiveNumber(array1) {
  return array1.reduce((total, val) => {
    return val > 0 ? total + val * val : total;
  }, 0);
}
console.log(sumOfPositiveNumber(array1));
