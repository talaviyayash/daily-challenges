//Aim : Flat an array without built-in methods.

// const array1 = [
//   [1, 2, 3, 45],
//   [5, 7, 8, [1, 2, [3, 7]], 9, 6],
// ];

// const flatArray = (array1, flatingNested) => {
//   const outputArray = [];
//   array1.forEach((element) => {
//     if (Array.isArray(element)) {
//       element.forEach((element) => {
//         outputArray.push(element);
//       });
//     }
//   });
//   return outputArray;
// };

// console.log(flatArray(array1, 2));

// const array1 = [
//   [1, 2, 3, 45],
//   [5, 7, 8, [1, 2, [3, 7, [1, 2, [3, 7, [1, 2, [3, 7]]]]]], 9, 6],
// ];

// const flatArray = (array1, flatingNested = 5) => {
//   let len;
//   let outputArray = [];
//   for (var i = 1; ; i++) {
//     array1.forEach((element) => {
//       if (Array.isArray(element)) {
//         element.forEach((element) => {
//           outputArray.push(element);
//         });
//       } else {
//         outputArray.push(element);
//       }
//     });
//     len = outputArray.length;
//     for (var i = 0; i < len; i++) {
//       if (Array.isArray(outputArray[i])) {
//         break;
//       }
//       if (!Array.isArray(outputArray[i]) && i == len - 1) {
//         return outputArray;
//       }
//     }
//     array1 = outputArray;
//     outputArray = [];
//   }
// };

// console.log(flatArray(array1));

// const array1 = [
//   [1, 2, 3, 45],
//   [5, 7, 8, [1, 2, [3, 7, [1, 2, [3, 7, [1, 2, [3, 7]]]]]], 9, 6],
// ];

// const flatArray = (array1, HowMany = 0) => {
//   if (HowMany == 1) {
//     return array1;
//   }
//   const outputArray = [];
//   array1.forEach((element) => {
//     if (Array.isArray(element)) {
//       element.forEach((value) => {
//         outputArray.push(value);
//       });
//     } else {
//       outputArray.push(element);
//     }
//   });
//   let len = outputArray.length;
//   for (var i = 0; i < len; i++) {
//     if (Array.isArray(outputArray[i])) {
//       return flatArray(outputArray, HowMany - 1);
//     } else if (!Array.isArray(outputArray[i]) && i == len - 1) {
//       return outputArray;
//     }
//   }
// };
// console.log(flatArray(array1));

// const array1 = [
//   [1, 2, 3, 45],
//   [5, 7, 8, [1, 2, [3, 7, [1, 2, [3, 7, [1, 2, [3, 7]]]]]], 9, 6],
// ];

// const flatArray = (array1, HowMany = 0) => {
//   if (HowMany == 1) {
//     return array1;
//   }
//   let arrayInArray = 0;
//   const outputArray = [];
//   array1.forEach((element) => {
//     if (Array.isArray(element)) {
//       element.forEach((value) => {
//         outputArray.push(value);
//       });
//       arrayInArray++;
//     } else {
//       outputArray.push(element);
//     }
//   });
//   if (arrayInArray > 0 && HowMany !== 1) {
//     return flatArray(outputArray, HowMany - 1);
//   }
//   return outputArray;
// };
// console.log(flatArray(array1));

// const array1 = [
//   [1, 2, 3, 45],
//   [5, 7, 8, [1, 2, [3, 7, [1, 2, [3, 7, [1, 2, [3, 7]]]]]], 9, 6],
// ];

// const flatArray = (array1, HowMany = 0) => {
//   if (HowMany == 1) {
//     return array1;
//   }
//   let outputArray = [];
//   array1.forEach((element) => {
//     if (Array.isArray(element)) {
//       element.forEach((value) => {
//         outputArray.push(value);
//       });
//       outputArray = flatArray(outputArray, HowMany - 1);
//     } else {
//       outputArray.push(element);
//     }
//   });
//   return outputArray;
// };
// console.log(flatArray(array1));

// const flattenArray = (inputArray, howMany = -1) => {
//   if (howMany == 0) {
//     return inputArray;
//   }
//   return inputArray.reduce((item, value) => {
//     return item.concat(
//       Array.isArray(value) ? flattenArray(value, howMany - 1) : value
//     );
//   }, []);
// };
// console.log(flattenArray(array1));
const array1 = [
  [1, 2, 3, 45],
  [5, 7, 8, [1, 2, [3, 7, [1, 2, [3, 7, [1, 2, [3, 7]]]]]], 9, 6],
];
const flatArray = (array1, howMany = 0) => {
  if (howMany === 1) {
    return array1;
  }
  return array1.reduce((item, val) => {
    return Array.isArray(val)
      ? [...item, ...flatArray(val, howMany - 1)]
      : [...item, val];
  }, []);
};
console.log(flatArray(array1, 3));
