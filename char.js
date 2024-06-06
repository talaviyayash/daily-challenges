// const strings1 = ["applae", "oraalnge", "graple"];
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
