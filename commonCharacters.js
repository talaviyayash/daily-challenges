// const strings1 = ["apple", "orange", "grape"];
// function commonCharacters(strings1 = []) {
//   if (strings1.length === 0) {
//     return strings1;
//   }
//   const splited = strings1.map((val) => {
//     return val.split("");
//   });

//   splited[0].map((val) => {
//     return splited[2].indexOf(val);
//   });
//   return splited;
// }
// console.log(commonCharacters(strings1));

// console.log(strings1[1].indexOf("a"));

// const strings1 = ["apple", "orange", "grape"];
// const strings1 = ["bella", "label", "rolelr"];
// function commonCharacters(strings1 = []) {
//   if (strings1.length === 0) {
//     return strings1;
//   }
//   const b = [];
//   for (var i = 0; i < strings1[0].length; i++) {
//     let l = strings1.map((val) => {
//       return -1 < val.indexOf(strings1[0][i]) ? strings1[0][i] : "";
//     });
//     console.log(l);
//     b[i] = b[i].includes("") ? [] : b[i];
//     // b[i] = l[0];
//     console.log(strings1[0][i]);
//   }
//   return b;
// }
// console.log(commonCharacters(strings1));

// console.log(strings1[1].indexOf("a"));

// const strings1 = ["apple", "oralnge", "graple"];
// function commonCharacters(strings1 = []) {
//   if (strings1.length === 0) {
//     return strings1;
//   }
//   const splited = strings1.map((val) => {
//     return val.split("");
//   });
//   const c = [];
//   for (var i = 0; i < strings1[0].length; i++) {
//     let l = strings1.map((val) => {
//       return -1 < val.indexOf(strings1[0][i]) ? strings1[0][i] : "";
//     });
//     console.log(l);
//     c[i] = l.includes("") ? "" : l[0];
//   }
//   return c.filter((val) => {
//     return val;
//   });
// }
// console.log(commonCharacters(strings1));

function commonCharacters(strings1 = []) {
  const obj1 = {};
  for (var j = 1; j < strings1.length; j++) {
    obj1[j] = [];
    for (var i = 0; i < strings1[0].length; i++) {
      const reg = new RegExp(`${strings1[0][i]}`, "ig");
      for (const a of strings1[j].matchAll(reg)) {
        obj1[j].push(a[0]);
      }
    }
  }
  if (strings1.length == 2) {
    return obj1[1];
  }
  console.log(obj1);
  //   obj1[1]
  let inArray = [];
  let output = obj1[1];
  for (var i = 2; i < strings1.length; i++) {
    if (i == 2) {
    } else {
      output = inArray;
      inArray = [];
    }
    for (var j = 0; j < output.length; j++) {
      if (obj1[2].includes(output[j])) {
        inArray.push(output[j]);
      }
    }
  }
  inArray.sort();
  const b = [];
  for (var i = 0; i < inArray.length; i++) {
    console.log(inArray[i]);
    if (b.length == 0) {
      b.push(inArray[i]);
      continue;
    }
    if (b[b.length - 1] == inArray[i] && b[b.length - 1] == inArray[i - 3]) {
      b.push(inArray[i]);
      continue;
    } else if (
      b[b.length - 1] == inArray[i - 2] ||
      b[b.length - 1] == inArray[i - 1]
    ) {
      continue;
    } else {
      b.push(inArray[i]);
    }
  }
  return b;
}

const strings1 = ["blelaaa", "aablae", "raloaer"];
strings1.sort(function (a, b) {
  return a.length - b.length;
});
console.log(commonCharacters(strings1));

// console.log(strings1);

// function commonCharacters(strings1 = []) {
//   let output = strings1[0].split("");
//   for (var i = 1; i < strings1.length; i++) {
//     for (var j = 0; i < strings1[i].length; j++) {}
//   }
// }

// const strings1 = ["bleaal", "aabe", "raolaer"];
// strings1.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(commonCharacters(strings1));
