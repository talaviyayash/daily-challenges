// let a ="Hello World"

// const reverse = (a) =>{
// let b=""
// let c =0;
// for (var i = 1;i<=a.length ; i++) {
//     // b[c]= a[i]
//     b= b +a[a.length-i]
// }
// return b;
// }
// console.log(reverse(a))

let inputedString = "Hello World";

const reverseString = (str) => {
  let outputString = "";
  for (var i = 1; i <= str.length; i++) {
    outputString = outputString + str[str.length - i];
  }
  return outputString;
};
console.log(reverseString(inputedString));
