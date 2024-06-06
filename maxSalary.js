// let salaries = {
//   Zalak: 300,
//   John: 0,
//   Pete: 0,
//   Mary: 250,
// };
// function maxSalary(salaries) {
//   let namesArr = {};
//   let count = 1;
//   for (const name in salaries) {
//     if (count === 1) {
//       namesArr[name] = salaries[name];
//     } else {
//       if (salaries[namesArr] < salaries[name]) {
//         namesArr = {};
//         namesArr[name] = salaries[name];
//       } else if (salaries[namesArr[Object.keys(name)[0]]] == salaries[name]) {
//         namesArr[name] = salaries[name];
//       }
//     }
//     count++;
//   }
//   return {
//     namesArr,
//     maxSalary: salaries?.[namesArr[0]] ? salaries?.[namesArr[0]] : 0,
//   };
// }
// console.log(maxSalary(salaries));

// [{
//   name : zalak
//   salary : 2000
// }]

// let salaries = {
//   Zalak: 300,
//   John: 0,
//   Pete: 0,
//   Mary: 250,
// };
// function maxSalary(salaries) {
//   let namesArr = [];
//   let count = 1;
//   for (const name in salaries) {
//     if (count === 1) {
//       namesArr[name] = salaries[name];
//     } else {
//       if (salaries[namesArr] < salaries[name]) {
//         namesArr = {};
//         namesArr[name] = salaries[name];
//       } else if (salaries[namesArr[Object.keys(name)[0]]] == salaries[name]) {
//         namesArr[name] = salaries[name];
//       }
//     }
//     count++;
//   }
//   return {
//     namesArr,
//     maxSalary: salaries?.[namesArr[0]] ? salaries?.[namesArr[0]] : 0,
//   };
// }
// console.log(maxSalary(salaries));

// let salaries = {
//   Zalak: 300,
//   John: 21310,
//   Pete: 0,
//   Mary: 250,
// };
// function maxSalary(salaries) {
//   let namesArr = [];
//   console.log(Object.entries(salaries));
//   for (const [name, value] of Object.entries(salaries)) {
//     if (namesArr.length == 0) {
//       namesArr[0] = name;
//     } else {
//       if (salaries[namesArr[0]] < salaries[name]) {
//         namesArr = [];
//         namesArr[0] = name;
//       } else if (salaries[namesArr[0]] == salaries[name]) {
//         namesArr.push(name);
//       }
//     }
//   }
//   return {
//     namesArr,
//     maxSalary: salaries?.[namesArr[0]] ? salaries?.[namesArr[0]] : 0,
//   };
// }
// console.log(maxSalary(salaries));

let salaries = {
  Zalak: 300,
  John: 10,
  Pete: 300,
  Mary: 250,
};
function maxSalary(salaries) {
  const namesArr = Object.entries(salaries).reduce((total, [key, value]) => {
    const names = [...total];
    if (total.length == 0) {
      names.push(key);
    } else {
      if (value == salaries[names[0]]) {
        names.push(key);
        return names;
      } else if (value > salaries[names[0]]) {
        return [key];
      }
    }
    return names;
  }, []);
  return {
    namesArr,
    maxSalary: salaries?.[namesArr[0]] ? salaries?.[namesArr[0]] : 0,
  };
}
console.log(maxSalary(salaries));
