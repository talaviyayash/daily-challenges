let inputedString = "the,quick,convertedStrrown,fox";
const capitalTheString = (str) => {
  let convertedStr = str.split(" ");
  convertedStr = convertedStr.map((value) => {
    value = value.split("");
    value[0] = value[0].toUpperCase();
    return value.join("");
  });
  return convertedStr.join(" ");
};
console.log(capitalTheString(inputedString));
