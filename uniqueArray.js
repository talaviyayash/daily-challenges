// const array1 = ["yash", 12, 12, 45, 785];
// const array2 = ["yash", 12, 45, 45, 5454];

// function uniqueElement(array1, array2) {
//   const intersectionArray = array1.filter((value) => {
//     if (array2.includes(value)) {
//       return true;
//     }
//   });
//   //optimize
//   const unique = (array1, array2) => {
//     return array1.filter((value) => {
//       if (array2.includes(value)) {
//         return false;
//       }
//       return true;
//     });
//   };
//   let uniquArray = unique(array1, array2);
//   uniquArray = [...uniquArray, ...unique(array2, array1)];
//   //optimize
//   return { intersectionArray, uniquArray };
// }
// console.log(uniqueElement(["yash", "talaviya"], array2));

//Aim :  Write a function that takes two arrays as input and returns their intersection, a new array containing unique elements common to both input arrays.
const array1 = ["yash", 12, 12, 45, 785];
const array2 = ["yash", 12, 45, 45, 5454];

function uniqueElement(array1, array2) {
  const arr1 = new Set([...array1]);
  const arr2 = new Set([...array2]);
  const intersection = [];
  const uniqeArray = [];
  arr1.forEach((value) => {
    if (arr2.has(value)) {
      intersection.push(value);
    }
  });
  const unique = (array1, array2) => {
    array1.forEach((value) => {
      if (array2.has(value)) {
        return;
      }
      uniqeArray.push(value);
    });
  };
  unique(arr1, arr2);
  unique(arr2, arr1);
  return { intersection, uniqeArray };
}
console.log(uniqueElement(array1, array2));

// fix it
