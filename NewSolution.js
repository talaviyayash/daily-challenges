const exampleArray = ["bella", "label", "roller", "ascaeclw"];

const commonChar = (arr) => {
  const tempArray = [...arr];
  if (tempArray.length == 0) {
    return [];
  }

  let result = [...tempArray[0]];
  for (let i = 1; i < tempArray.length; i++) {
    result = result.filter((char) => {
      const l = tempArray[i].length;
      tempArray[i] = tempArray[i].replace(char, "");
      return l > tempArray[i].length;
    });
  }
  return result;
};

const comCharResult = commonChar(exampleArray);
console.log(comCharResult, exampleArray);
