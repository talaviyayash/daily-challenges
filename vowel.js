// let a = "Hi i am new in this Town,aaaaaa So can you uuuu  help me."

// const vowel = (a) => {
//     let b = {};

//     for (var i = 0; i < a.length; i++) {
//         if (['a', 'e', 'i', 'o', 'u'].indexOf(a[i]) >= 0) {
//             if (b[a[i]]) {
//                 ++b[a[i]];
//             }
//             else {
//                 b[a[i]] = 1;
//             }
//         }
//     }
//     return b
// }
// console.log(vowel(a))

//use includes

// let inputedString = "Hi i am new in this Town,aaaaaa So can you uuuu  help me.";
// const vowels = ["a", "e", "i", "o", "u"];

// const countVowels = (inputedString) => {
//   let objectOutput = {};
//   convertToArray = inputedString.split("");

//   convertToArray.forEach((value) => {
//     if (vowels.includes(value)) {
//       if (objectOutput[value]) {
//         ++objectOutput[value];
//       } else {
//         objectOutput[value] = 1;
//       }
//     }
//   });
//   return objectOutput;
// };
// console.log(countVowels(inputedString));

// use reduse

let inputedString = "Hi i am new in this Town,aaaaaa So can you uuuu  help me.";
const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (inputedString) => {
  convertToArray = inputedString.split("");
  const objectOutput = convertToArray.reduce(
    (total, value) => {
      if (vowels.includes(value)) {
        if (total?.eachCount?.[value]) {
          ++total.totalVovels;
          ++total.eachCount[value];
          return total;
        } else {
          total.eachCount[value] = 1;
          return total;
        }
      }
      return total;
    },
    { totalVovels: 0, eachCount: {} }
  );
  return objectOutput;
};
console.log(countVowels(inputedString));
// {
//   totalVovels:23,
//   eachCount:{i:1,a:2}
// }
