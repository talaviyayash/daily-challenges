// let a ="Find the shortest word in  a sentence that contains a specific letter"
// const find = (a,findevalue)=>{
// let b = a.split(" ")
// let d ="" ;
// var re = new RegExp(`${findevalue}`, 'gi');
// for (var i = 0;i<b.length ; i++) {
//     if(b[i].match(re)){
//         if(d == ""){
//             d= b[i]
//         }
//          if(d.length>b[i].length){
//             d =b[i]
//         }
//     }
// }
// return d
// }
// console.log(find(a , 'e'))3

let inputedString =
  "Find the shortest word in  a sentence that contains ee a specific letter";
const findTheWord = (inputedString, findingvalue) => {
  let arra1 = inputedString.split(" ");
  var regexValue = new RegExp(`${findingvalue}`, "gi");
  const findevalue = arra1.reduce((total, value) => {
    if (value.match(regexValue)) {
      if (total.length > value.length) {
        total = value;
      }
    }
    return total;
  }, "");
  return findevalue;
};
console.log(findTheWord(inputedString, "a"));
