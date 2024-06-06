// let str = "This is a test. this test is a Test."

// const word = (str) => {
//     str = str.replace(/\./g, "")
//     let Array1 = str.split(" ")
//     let c = {}

//     for (var i = 0; i < Array1.length; i++) {
//         if (c[Array1[i]]) {
//             c[Array1[i]] = c[Array1[i]] + 1;
//         }
//         else {
//             c[Array1[i]] = 1;
//         }
//     }
//     return c;
// }
// console.log(word(str))

//do case insensetive

let inputedString = "This is a test. this test is a Test.";

const wordCount = (inputedString, caseInsensitive) => {
  if (caseInsensitive) {
    inputedString = inputedString.toLowerCase();
  }
  inputedString = inputedString.replace(/\./g, "");
  let Array1 = inputedString.split(" ");
  let objectOutput = Array1.reduce((total, value) => {
    if (total?.[value]) {
      total[value] = total[value] + 1;
      return total;
    } else {
      total[value] = 1;
      return total;
    }
  }, {});
  return objectOutput;
};
console.log(wordCount(inputedString, false));

// optimize
