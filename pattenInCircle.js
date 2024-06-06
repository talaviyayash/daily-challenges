function makeCube() {
  let num = 0;
  const input = 6;
  let array = Array.from(Array(input));
  array = array.map(() => []);
  const cube = input * input;
  function printCube(startX, endX, startY, endY) {
    for (let i = startX; i <= endX; i++) {
      num++;
      array[startY][i] = num;
    }
    for (let i = startY + 1; i <= endY; i++) {
      num++;
      array[i][endX] = num;
    }
    for (let i = endX - 1; i >= startX; i--) {
      num++;
      array[endY][i] = num;
    }
    for (let i = endY - 1; i > startY; i--) {
      num++;
      array[i][startX] = num;
    }

    return cube <= num
      ? null
      : printCube(startX + 1, endX - 1, startY + 1, endY - 1);
  }
  printCube(0, input - 1, 0, input - 1);
  console.log(array);
}
makeCube();
