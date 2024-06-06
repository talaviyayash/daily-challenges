// // console.log(findCommen("grape", findCommen("orange", "apple")));
// const strings1 = ["blelaa", "aable", "raloaer"];
// strings1.sort(function (a, b) {
//   return a.length - b.length;
// });

// function findCommen(str1, str2) {
//   const array1 = [];
//   const b = new Set();
//   for (var i = 0; i < str1.length; i++) {
//     const reg = new RegExp(`${str1[i]}`, "ig");
//     for (const a of str2.matchAll(reg)) {
//       b.add(a.index);
//     }
//   }

//   for (const a of b) {
//     array1.push(str2.at(a));
//   }
//   return array1.join("");
// }

// function commonCharacters(strings1 = []) {
//   if (strings1.length == 0) {
//     return [];
//   }
//   if (strings1.length == 1) {
//     return strings1[0].split("");
//   }
//   output = strings1[0];
//   for (var i = 1; i < strings1.length; i++) {
//     output = findCommen(output, strings1[i]);
//   }
//   return output;
// }
// console.log(commonCharacters(["gralpe", "orangel", "apple"]));

// console.log(findCommen("grape", findCommen("orange", "apple")));

// const strings1 = ["blelaa", "aable", "raloaer"];
// strings1.sort(function (a, b) {
//   return a.length - b.length;
// });

// const findCommen = (str1, str2) => {
//   const array1 = [];
//   const newSet = new Set();
//   for (var i = 0; i < str1.length; i++) {
//     const reg = new RegExp(`${str1[i]}`, "ig");
//     for (const val of str2.matchAll(reg)) {
//       newSet.add(val.index);
//     }
//   }

//   for (const val of newSet) {
//     array1.push(str2.at(val));
//   }
//   return array1.join("");
// };

// const commonCharacters = (strings1 = []) => {
//   if (strings1.length == 0) {
//     return [];
//   } else if (strings1.length == 1) {
//     return strings1[0].split("");
//   }
//   return strings1.reduce((total, val) => {
//     return findCommen(total, val);
//   }, strings1[0]);
// };
// console.log(commonCharacters(["grlpe", "orangel", "apple"]));

// const commonOnBothString = (strings1, strings2) => {
//   const obj1 = [...strings1].reduce((total, val, index) => {
//     if (!total?.[val] || index == 0) {
//       total[val] = 1;
//     } else {
//       ++total[val];
//     }
//     return total;
//   }, {});
//   const commen = [...strings2].reduce((total, val) => {
//     if (obj1?.[val] || obj1[val] > 0) {
//       total.push(val);
//       --obj1[val];
//     }
//     return total;
//   }, []);
//   return commen.join("");
// };
// const findAllCommon = (stringsAll) => {
//   const findCommen = stringsAll.reduce((total, val, index) => {
//     if (index == 0) {
//       return total;
//     }
//     return commonOnBothString(total, val);
//   }, stringsAll[0]);
//   return findCommen;
// };

// console.log(findAllCommon(["beala", "ladbe", "rollaer"]));
const commonOnBothString = (strings1, strings2) => {
  const obj1 = [...strings1].reduce((total, val, index) => {
    if (!total?.[val] || index == 0) {
      total[val] = 1;
    } else {
      ++total[val];
    }
    return total;
  }, {});
  const commen = [...strings2].reduce((total, val) => {
    if (obj1?.[val] || obj1[val] > 0) {
      total += val;
      --obj1[val];
    }
    return total;
  }, "");
  return commen;
};
const findAllCommon = (stringsAll) => {
  const findCommen = stringsAll.reduce((total, val, index) => {
    if (index == 0) {
      return total;
    }
    return commonOnBothString(total, val);
  }, stringsAll[0]);
  return [...findCommen];
};
console.log(findAllCommon(["lbeasdaala", "laasdldbe", "roadsllaer"]));
